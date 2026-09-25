"use client";

import { useCallback, useEffect, useState } from "react";

import {
  CourseProgress,
  getCourseCompletionPercentage,
  getTotalCompleted,
  isCourseComplete,
  readCourseProgress,
} from "@/lib/course-progress";

export function useCourseProgress() {
  const [progress, setProgress] = useState<CourseProgress>({
    blockchain: { completed: 0, total: 8 },
    solana: { completed: 0, total: 8 },
    memeCoins: { completed: 0, total: 7 },
    security: { completed: 0, total: 7 },
  });

  const refresh = useCallback(() => {
    setProgress(readCourseProgress());
  }, []);

  useEffect(() => {
    refresh();

    const handler = () => refresh();

    window.addEventListener("storage", handler);
    window.addEventListener("chainlab-course-progress", handler);

    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("chainlab-course-progress", handler);
    };
  }, [refresh]);

  const completed = getTotalCompleted(progress);

  return {
    progress,
    completed,
    total: 30,
    percentage: getCourseCompletionPercentage(progress),
    complete: isCourseComplete(progress),
    refresh,
  };
}
