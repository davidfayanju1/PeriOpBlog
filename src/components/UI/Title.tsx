interface TitleProp {
  children: string;
  textStyle: string;
}

const Title = ({ children, textStyle }: TitleProp) => {
  return (
    <h1 className={`poppins-bold md:text-[1.8rem] text-[1.5rem] ${textStyle}`}>
      {children}
    </h1>
  );
};

export default Title;
