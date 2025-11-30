import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-8">
      <div className="text-center max-w-2xl">
        <div className="relative mx-auto mb-8 w-32 h-32">
          <Image
            src="https://github.com/viniciusidacruz.png"
            alt="Vinicius da Cruz"
            fill
            className="rounded-full object-cover ring-4 ring-blue-500/30 shadow-xl shadow-blue-500/20"
          />
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500/20 to-transparent" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-4">
          Frontend Lab
        </h1>

        <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
          Um repositório de estudos e experimentos com{" "}
          <span className="text-orange-400 font-semibold">HTML</span>,{" "}
          <span className="text-yellow-400 font-semibold">JavaScript</span> e{" "}
          <span className="text-cyan-400 font-semibold">React</span>. Criado
          para compartilhar conhecimento e facilitar o dia a dia de
          desenvolvedores frontend.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Link
            href="https://github.com/viniciusidacruz"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-300 text-sm transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            @viniciusidacruz
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">🏷️</div>
            <div className="text-sm text-zinc-400">HTML</div>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-sm text-zinc-400">JavaScript</div>
          </div>
          <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
            <div className="text-2xl mb-1">⚛️</div>
            <div className="text-sm text-zinc-400">React</div>
          </div>
        </div>
      </div>
    </div>
  );
}
