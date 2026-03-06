export const metadata = { title: "404 — Page Not Found" };

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">404 — Page Not Found</h1>
      </div>
      <p className="text-zinc-700 leading-relaxed">
        Sometimes, we all get a little lost in life. Trust me — I&apos;ve been
        there. But what&apos;s most important to know is that we can always find
        our way home.
      </p>
      <p className="text-zinc-700 leading-relaxed">
        And in this case, it should be pretty easy. Just use the menu above to
        navigate to where you wanted to go!
      </p>
    </div>
  );
}

