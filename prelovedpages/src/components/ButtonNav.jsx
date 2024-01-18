const ButtonNav = ({text}) => {
  return (
    <div className="flex items-center justify-center">
      <NeumorphismButton text={text}/>
    </div>
  );
};

const NeumorphismButton = ({text}) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-3xl
        flex items-center gap-2 
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonNav;