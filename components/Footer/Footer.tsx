import { Body, Header } from "@components"

export const Footer = () => {
  return (
    <div className="w-full h-36 tablet:h-72 bg-cobalt flex flex-col justify-center px-8 tablet:px-24">
      <div className="bg-white mobile:h-1 tablet:h-1.5"></div>
      {/* Desktop and Tablet */}
      <div className="hidden tablet:flex flex-row justify-between items-end text-white mt-8">
        {/* Left part */}
        <div className="w-1/2 ">
          <Header preset="h3">dados</Header>
          <Body preset="p2">A platform for assessing lecturer’s performance objectively with affirmations from students who related lecturers have taught—a platform from students for students.</Body>
        </div>
        {/* Right part */}
        <div>
          <Header preset="h5">© 2023 Dados Indonesia. All Rights Reserved</Header>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex tablet:hidden flex-row justify-center items-center text-white mt-3">
        {/* Left part */}
        <div className="flex flex-col items-center ">
          <Header preset="h1">dados</Header>
          <Header preset="h6" className="text-center">© 2023 Dados Indonesia. All Rights Reserved</Header>

        </div>
      </div>
    </div>
  );
};
