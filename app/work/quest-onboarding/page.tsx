export default function QuestOnboarding() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1 
        className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
        style={{ fontFamily: 'var(--font-mori)' }}
      >
        Quest Onboarding
      </h1>
      <p className="body-font-1 text-black dark:text-zinc-50">
        This is an example of body font 1 with font size 18px, line height 26px, and letter spacing 2.4%.
      </p>
      </main>
    </div>
  );
}

