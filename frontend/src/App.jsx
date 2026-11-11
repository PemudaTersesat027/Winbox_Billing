/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import {
    Monitor,
    Cpu,
    MessageSquare,
    CheckCircle2
} from "lucide-react";

export default function App() {
    const [bridge, setBridge] = useState(null);
    const [version, setVersion] = useState("-");
    const [status, setStatus] = useState("Menghubungkan...");

    useEffect(() => {
        if (!window.qt?.webChannelTransport || !window.QWebChannel) {
            setStatus("QWebChannel tidak tersedia");
            return;
        }

        new window.QWebChannel(
            window.qt.webChannelTransport,
            (channel) => {
                const nativeBridge = channel.objects.bridge;

                setBridge(nativeBridge);
                setStatus("Terhubung ke C++");

                nativeBridge.appVersion((result) => {
                    setVersion(result);
                });

                nativeBridge.messageFromCpp.connect((message) => {
                    console.log("Pesan dari C++:", message);
                });
            }
        );
    }, []);

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-5xl mx-auto">
                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-emerald-500/15 rounded-xl">
                            <Monitor className="text-emerald-400" size={28} />
                        </div>
                        <span className="text-emerald-400 font-semibold">
                            QT DESKTOP
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold">
                        Qt + React Application
                    </h1>

                    <p className="text-slate-400 mt-2">
                        React frontend powered by native C++ backend.
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-5">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <Cpu className="text-emerald-400 mb-4" size={28} />
                        <p className="text-slate-400 text-sm">
                            Backend Status Check
                        </p>
                        <h2 className="text-xl font-semibold mt-2">
                            {status}
                        </h2>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <CheckCircle2 className="text-blue-400 mb-4" size={28} />
                        <p className="text-slate-400 text-sm">
                            Application Version
                        </p>
                        <h2 className="text-xl font-semibold mt-2">
                            {version}
                        </h2>
                    </div>
                </section>

                <section className="mt-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                    <MessageSquare className="text-emerald-400 mb-4" />

                    <h2 className="text-xl font-semibold">
                        Native C++ Communication
                    </h2>

                    <p className="text-slate-400 mt-2 mb-6">
                        Klik tombol untuk memanggil fungsi native C++.
                    </p>

                    <button
                        onClick={() => bridge?.showMessage("Halo dari React!")}
                        disabled={!bridge}
                        className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 px-5 py-3 rounded-xl font-medium transition"
                    >
                        Panggil C++ Backend
                    </button>
                </section>
            </div>
        </main>
    );
}
