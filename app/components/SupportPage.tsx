interface SupportPageProps {
  appName: string;
}

export default function SupportPage({ appName }: SupportPageProps) {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{appName} Support</h1>
      </div>
      <p className="text-zinc-700 leading-relaxed">
        For support, please email{" "}
        <a href="mailto:reidfleishman5@gmail.com">reidfleishman5@gmail.com</a>
      </p>
    </div>
  );
}

