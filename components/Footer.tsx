import React, { useState, useCallback } from 'react';

const PIX_KEY = "mauro2459m@gmail.com";

const Footer: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(PIX_KEY).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }, []);

    return (
        <footer className="bg-gray-800/50 py-12">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="max-w-md mx-auto mb-8 p-6 bg-gray-800 rounded-lg border border-teal-500/30">
                    <h4 className="font-bold text-lg text-white mb-2">Pague com PIX</h4>
                    <p className="text-sm mb-4">Para pagamento direto, utilize a chave PIX abaixo. Após o pagamento, entre em contato para liberação do produto.</p>
                    <div className="flex items-center justify-center bg-gray-900 rounded-md p-3">
                        <span className="text-teal-400 font-mono select-all">{PIX_KEY}</span>
                        <button 
                            onClick={copyToClipboard}
                            className="ml-4 bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-teal-600 transition-colors"
                        >
                            {copied ? 'Copiado!' : 'Copiar'}
                        </button>
                    </div>
                </div>

                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} DigitalStore. Todos os direitos reservados.</p>
                    <p className="mt-1">Uma loja de demonstração com checkout pela Kiwify.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
