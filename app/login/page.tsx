"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const loginStyles = `
  /* =====================================================
     LOGIN ROUTE — REMOVE ALL GLOBAL SITE CHROME
     The login screen is intentionally standalone.
  ===================================================== */

  body:has(#chainlab-login) .chainlab-utility-bar,
  body:has(#chainlab-login) .site-header,
  body:has(#chainlab-login) .chainlab-toolbar-center,
  body:has(#chainlab-login) .chainlab-toolbar-right,
  body:has(#chainlab-login) .chainlab-legal-links,
  body:has(#chainlab-login) footer,
  body:has(#chainlab-login) .chainlab-chat-launcher,
  body:has(#chainlab-login) .chainlab-chatbox,
  body:has(#chainlab-login) .mobile-navigation,
  body:has(#chainlab-login) .mobile-nav,
  body:has(#chainlab-login) .cookie-consent,
  body:has(#chainlab-login) [class*="cookie-consent"],
  body:has(#chainlab-login) [class*="chat-launcher"],
  body:has(#chainlab-login) [class*="chatbox"] {
    display: none !important;
  }

  body:has(#chainlab-login) {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
  }

  body:has(#chainlab-login) > div {
    margin: 0 !important;
  }

  #chainlab-login {
    position: relative;
    z-index: 2147483000;
    min-height: 100svh;
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: 50% 50%;
    background: #0c1524;
    color: #fff;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  #chainlab-login *,
  #chainlab-login *::before,
  #chainlab-login *::after {
    box-sizing: border-box;
  }

  /* =====================================================
     LEFT SIDE — MOUNTAIN / WELCOME
  ===================================================== */

  #chainlab-login .login-left {
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px clamp(42px, 7vw, 105px);
    background:
      linear-gradient(
        90deg,
        rgba(4, 12, 27, .25),
        rgba(5, 14, 29, .16)
      ),
      url("/images/chainlab-login-mountain-background.png") center center / cover no-repeat;
  }

  #chainlab-login .login-left::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(
        180deg,
        rgba(4, 10, 23, .28) 0%,
        rgba(4, 10, 23, .04) 34%,
        rgba(3, 8, 18, .42) 100%
      );
  }

  #chainlab-login .login-back {
    position: absolute;
    top: 24px;
    left: 32px;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    height: 48px;
    padding: 0 20px;
    border: 1px solid rgba(255,255,255,.28);
    border-radius: 999px;
    color: #fff;
    background: rgba(18, 31, 51, .18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    font-size: 14px;
    font-weight: 650;
    text-decoration: none;
    transition: background .2s ease, border-color .2s ease, transform .2s ease;
  }

  #chainlab-login .login-back:hover {
    background: rgba(255,255,255,.10);
    border-color: rgba(255,255,255,.45);
    transform: translateY(-1px);
  }

  #chainlab-login .login-back-arrow {
    font-size: 25px;
    line-height: 1;
    margin-top: -2px;
  }

  #chainlab-login .login-left-content {
    position: relative;
    z-index: 3;
    width: min(570px, 100%);
    margin-top: 8vh;
  }

  #chainlab-login .login-welcome {
    margin: 0 0 36px;
    color: #fff;
    font-size: clamp(42px, 4.8vw, 68px);
    line-height: .98;
    font-weight: 760;
    letter-spacing: -.055em;
  }

  #chainlab-login .login-brand {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 28px;
    color: #fff;
  }

  #chainlab-login .login-brand-mark {
    position: relative;
    width: 76px;
    height: 76px;
    flex: 0 0 76px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
  }

  #chainlab-login .login-brand-mark::before {
    content: "";
    position: absolute;
    width: 13px;
    height: 108px;
    left: 31px;
    top: -16px;
    transform: rotate(-45deg);
    background: #0c1524;
  }

  #chainlab-login .login-brand-name {
    font-size: clamp(42px, 4.3vw, 64px);
    line-height: 1;
    font-weight: 780;
    letter-spacing: -.055em;
    white-space: nowrap;
  }

  #chainlab-login .login-brand-name span {
    color: #1687ff;
  }

  #chainlab-login .login-description {
    max-width: 560px;
    margin: 0;
    color: rgba(255,255,255,.88);
    font-size: clamp(19px, 1.7vw, 27px);
    line-height: 1.4;
    letter-spacing: -.02em;
  }

  /* =====================================================
     RIGHT SIDE — LOGIN
  ===================================================== */

  #chainlab-login .login-right {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px clamp(40px, 7vw, 105px);
    background:
      radial-gradient(circle at 70% 32%, rgba(54, 84, 130, .23), transparent 35%),
      linear-gradient(145deg, #162438 0%, #101b2b 46%, #090f18 100%);
  }

  #chainlab-login .login-right::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 65%, rgba(79, 116, 164, .13), transparent 35%),
      linear-gradient(90deg, rgba(255,255,255,.035), transparent 1px);
    opacity: .8;
  }

  #chainlab-login .login-form {
    position: relative;
    z-index: 2;
    width: min(100%, 520px);
  }

  #chainlab-login .login-title {
    margin: 0 0 14px;
    color: #fff;
    font-size: clamp(42px, 4vw, 58px);
    line-height: 1;
    font-weight: 730;
    letter-spacing: -.045em;
  }

  #chainlab-login .login-subtitle {
    margin: 0 0 42px;
    color: rgba(255,255,255,.84);
    font-size: 16px;
    line-height: 1.5;
  }

  #chainlab-login .google-button {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border: 1px solid rgba(255,255,255,.62);
    border-radius: 9px;
    background: rgba(255,255,255,.04);
    color: #fff;
    font: inherit;
    font-size: 16px;
    font-weight: 650;
    cursor: pointer;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: background .2s ease, border-color .2s ease, transform .2s ease;
  }

  #chainlab-login .google-button:hover {
    background: rgba(255,255,255,.09);
    border-color: rgba(255,255,255,.85);
    transform: translateY(-1px);
  }

  #chainlab-login .google-icon {
    width: 23px;
    height: 23px;
    display: grid;
    place-items: center;
    font-size: 23px;
    font-weight: 800;
    font-family: Arial, sans-serif;
  }

  #chainlab-login .google-icon::before {
    content: "G";
    background: conic-gradient(
      from -45deg,
      #4285f4 0 25%,
      #34a853 25% 50%,
      #fbbc05 50% 68%,
      #ea4335 68% 84%,
      #4285f4 84% 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  #chainlab-login .divider {
    display: flex;
    align-items: center;
    gap: 18px;
    margin: 30px 0;
    color: rgba(255,255,255,.82);
    font-size: 13px;
    white-space: nowrap;
  }

  #chainlab-login .divider::before,
  #chainlab-login .divider::after {
    content: "";
    height: 1px;
    flex: 1;
    background: rgba(255,255,255,.82);
  }

  #chainlab-login .field {
    display: block;
    margin-bottom: 27px;
  }

  #chainlab-login .field > span {
    display: block;
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 650;
  }

  #chainlab-login .input-wrap {
    position: relative;
  }

  #chainlab-login .input-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    color: #fff;
    pointer-events: none;
  }

  #chainlab-login .input-icon svg {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  #chainlab-login .input-wrap input {
    width: 100%;
    height: 64px;
    padding: 0 58px 0 68px;
    border: 1px solid rgba(255,255,255,.60);
    border-radius: 9px;
    outline: none;
    background: rgba(25, 37, 55, .48);
    color: #fff;
    font: inherit;
    font-size: 15px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
  }

  #chainlab-login .input-wrap input::placeholder {
    color: rgba(213,220,232,.70);
    opacity: 1;
  }

  #chainlab-login .input-wrap input:focus {
    border-color: #1b8bff;
    box-shadow: 0 0 0 2px rgba(27,139,255,.16);
    background: rgba(27, 40, 60, .62);
  }

  #chainlab-login .password-toggle {
    position: absolute;
    right: 17px;
    top: 50%;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: #fff;
    cursor: pointer;
  }

  #chainlab-login .password-toggle svg {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  #chainlab-login .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -6px;
    margin-bottom: 30px;
  }

  #chainlab-login .remember {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
  }

  #chainlab-login .remember input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  #chainlab-login .check {
    width: 20px;
    height: 20px;
    border: 1.5px solid #fff;
    border-radius: 3px;
    display: grid;
    place-items: center;
  }

  #chainlab-login .remember input:checked + .check {
    background: #1687ff;
    border-color: #1687ff;
  }

  #chainlab-login .remember input:checked + .check::after {
    content: "✓";
    color: #fff;
    font-size: 13px;
    font-weight: 800;
  }

  #chainlab-login .forgot {
    padding: 0;
    border: 0;
    background: transparent;
    color: #1687ff;
    font: inherit;
    font-size: 13px;
    cursor: pointer;
  }

  #chainlab-login .forgot:hover,
  #chainlab-login .create-account:hover {
    text-decoration: underline;
  }

  #chainlab-login .submit {
    width: 100%;
    height: 62px;
    border: 0;
    border-radius: 8px;
    background: linear-gradient(90deg, #1188ff, #1688ff);
    color: #fff;
    font: inherit;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(0, 122, 255, .22);
    transition: transform .2s ease, filter .2s ease;
  }

  #chainlab-login .submit:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  #chainlab-login .submit:disabled {
    opacity: .6;
    cursor: not-allowed;
  }

  #chainlab-login .message {
    margin: 14px 0 0;
    color: #d7deea;
    text-align: center;
    font-size: 12px;
  }

  #chainlab-login .register {
    margin: 30px 0 0;
    color: #fff;
    font-size: 15px;
  }

  #chainlab-login .create-account {
    color: #1687ff;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    #chainlab-login {
      grid-template-columns: 1fr;
      min-height: 100svh;
      overflow-y: auto;
    }

    #chainlab-login .login-left {
      min-height: 420px;
      padding: 110px 35px 60px;
    }

    #chainlab-login .login-left-content {
      margin-top: 0;
    }

    #chainlab-login .login-right {
      min-height: auto;
      padding: 65px 35px 75px;
    }

    #chainlab-login .login-back {
      left: 22px;
      top: 22px;
    }
  }

  @media (max-width: 560px) {
    #chainlab-login .login-left {
      min-height: 390px;
      padding: 105px 25px 45px;
    }

    #chainlab-login .login-welcome {
      font-size: 42px;
      margin-bottom: 28px;
    }

    #chainlab-login .login-brand-mark {
      width: 58px;
      height: 58px;
      flex-basis: 58px;
    }

    #chainlab-login .login-brand-mark::before {
      left: 24px;
      height: 82px;
      width: 10px;
      top: -12px;
    }

    #chainlab-login .login-brand-name {
      font-size: 42px;
    }

    #chainlab-login .login-description {
      font-size: 18px;
    }

    #chainlab-login .login-right {
      padding: 55px 24px 60px;
    }

    #chainlab-login .login-title {
      font-size: 43px;
    }

    #chainlab-login .login-subtitle {
      margin-bottom: 32px;
    }

    #chainlab-login .divider {
      gap: 10px;
    }
  }


/* =====================================================
   CHAINLAB LOGIN — LOCK CURRENT DESIGN TO LIGHT MODE
   No visual redesign. Existing colours/layout remain unchanged.
   ===================================================== */

  /* Keep the login route independent from the global theme. */
  body:has(#chainlab-login),
  body:has(#chainlab-login) #chainlab-login {
    color-scheme: light !important;
  }

  /* Preserve the existing login colours exactly. */
  body:has(#chainlab-login) #chainlab-login .login-brand-name span,
  body:has(#chainlab-login) #chainlab-login .forgot,
  body:has(#chainlab-login) #chainlab-login .create-account {
    color: #1687ff !important;
  }

  body:has(#chainlab-login) #chainlab-login .submit {
    background: linear-gradient(90deg, #1188ff, #1688ff) !important;
    color: #fff !important;
  }

  body:has(#chainlab-login) #chainlab-login .remember input:checked + .check {
    background: #1687ff !important;
    border-color: #1687ff !important;
  }

  body:has(#chainlab-login) #chainlab-login .input-wrap input:focus {
    border-color: #1b8bff !important;
    box-shadow: 0 0 0 2px rgba(27,139,255,.16) !important;
  }

`;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        setMessage(
          error.message ||
            "Unable to sign in. Please check your email and password."
        );
        setIsLoading(false);
        return;
      }

      setMessage("Signed in successfully. Redirecting...");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong while signing in. Please try again.");
      setIsLoading(false);
    }
  }

  function handleGoogle() {
    setMessage("Google sign-in is not connected yet.");
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loginStyles }} />

      <main id="chainlab-login">
        <section className="login-left">
          <Link href="/" className="login-back">
            <span className="login-back-arrow">←</span>
            <span>Back to ChainLab</span>
          </Link>

          <div className="login-left-content">
            <h1 className="login-welcome">
              Welcome
              <br />
              Back,
            </h1>

            <div className="login-brand">
              <span className="login-brand-mark" aria-hidden="true" />
              <div className="login-brand-name">
                Chain<span>Lab</span>
              </div>
            </div>

            <p className="login-description">
              Enter your personal details and start
              <br />
              your journey with us.
            </p>
          </div>
        </section>

        <section className="login-right">
          <div className="login-form">
            <h2 className="login-title">Login</h2>

            <p className="login-subtitle">
              Measure the performance of cryptos,get big profits!
            </p>

            <button
              type="button"
              className="google-button"
              onClick={handleGoogle}
              disabled={isLoading}
            >
              <span className="google-icon" aria-hidden="true" />
              <span>Sign in with Google</span>
            </button>

            <div className="divider">
              <span>Or Sign in with Email</span>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="field">
                <span>Email</span>

                <div className="input-wrap">
                  <span className="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="mail@website.com"
                    required
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
              </label>

              <label className="field">
                <span>Password</span>

                <div className="input-wrap">
                  <span className="input-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <rect x="5" y="10" width="14" height="11" rx="2" />
                      <path d="M8 10V7.5C8 5 9.8 3 12 3s4 2 4 4.5V10" />
                    </svg>
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Min. 8 character"
                    required
                    autoComplete="current-password"
                    disabled={isLoading}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((value) => !value)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M4 12s3.5-6 8-6 8 6 8 6-3.5 6-8 6-8-6-8-6Z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <div className="options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    disabled={isLoading}
                  />
                  <span className="check" aria-hidden="true" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot"
                  onClick={() =>
                    setMessage(
                      "Password reset is not available yet. Please contact ChainLab support."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            {message && (
              <p className="message" role="status">
                {message}
              </p>
            )}

            <p className="register">
              Not registered yet?{" "}
              <Link href="/signup" className="create-account">
                Create an Account
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
