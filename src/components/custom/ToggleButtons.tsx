import  { useState } from 'react';

const ToggleButtons = () => {
    const [active, setActive] = useState('Все');

    return (
        <div className="flex gap-4 justify-start rounded-2xl w-full max-w-md ">
            <button
                onClick={() => setActive('Все')}
                className={`
          px-4 py-0 text-sm h-8 rounded-full transition-all cursor-pointer
          ${active === 'Все' ? 'bg-white text-black shadow-lg' : 'bg-[#ffffff3b] text-white hover:bg-teal-600'}
        `}
            >
                Все
            </button>

            <button
                onClick={() => setActive('Музыка')}
                className={`
       px-4 py-0 text-sm h-8 rounded-full transition-all cursor-pointer
          ${active === 'Музыка' ? 'bg-white text-black shadow-lg' : 'bg-[#ffffff3b] text-white hover:bg-teal-600'}
        `}
            >
                Музыка
            </button>

            <button
                onClick={() => setActive('Подкасты')}
                className={`
         px-4 py-0 text-sm h-8 rounded-full transition-all cursor-pointer
          ${active === 'Подкасты' ? 'bg-white text-black shadow-lg' : 'bg-[#ffffff3b] text-white hover:bg-teal-600'}
        `}
            >
                Подкасты
            </button>
        </div>
    );
};

export default ToggleButtons;
