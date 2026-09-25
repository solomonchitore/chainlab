export type CourseModule =
  | "blockchain"
  | "solana"
  | "memeCoins"
  | "security";

export type ModuleProgress = {
  completed: number;
  total: number;
};

export type CourseProgress = Record<CourseModule, ModuleProgress>;

export const COURSE_MODULES: Record<
  CourseModule,
  { label: string; total: number; storageKey: string }
> = {
  blockchain: {
    label: "Blockchain",
    total: 8,
    storageKey: "chainlab-blockchain-progress",
  },
  solana: {
    label: "Solana",
    total: 8,
    storageKey: "chainlab-solana-progress",
  },
  memeCoins: {
    label: "Meme Coins",
    total: 7,
    storageKey: "chainlab-meme-coins-progress",
  },
  security: {
    label: "Security",
    total: 7,
    storageKey: "chainlab-security-progress",
  },
};

export const TOTAL_COURSE_SECTIONS = 30;

export function readModuleCompleted(module: CourseModule): number {
  if (typeof window === "undefined") return 0;

  try {
    const raw = localStorage.getItem(COURSE_MODULES[module].storageKey);
    if (!raw) return 0;

    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return Math.min(parsed.length, COURSE_MODULES[module].total);
    }

    if (typeof parsed === "number") {
      return Math.min(
        Math.max(0, parsed),
        COURSE_MODULES[module].total
      );
    }

    return 0;
  } catch {
    return 0;
  }
}

export function readCourseProgress(): CourseProgress {
  return {
    blockchain: {
      completed: readModuleCompleted("blockchain"),
      total: 8,
    },
    solana: {
      completed: readModuleCompleted("solana"),
      total: 8,
    },
    memeCoins: {
      completed: readModuleCompleted("memeCoins"),
      total: 7,
    },
    security: {
      completed: readModuleCompleted("security"),
      total: 7,
    },
  };
}

export function getTotalCompleted(progress: CourseProgress): number {
  return Object.values(progress).reduce(
    (sum, module) => sum + module.completed,
    0
  );
}

export function getCourseCompletionPercentage(
  progress: CourseProgress
): number {
  return Math.round(
    (getTotalCompleted(progress) / TOTAL_COURSE_SECTIONS) * 100
  );
}

export function isCourseComplete(progress: CourseProgress): boolean {
  return getTotalCompleted(progress) >= TOTAL_COURSE_SECTIONS;
}