import { Body, Header } from "@components"

export const Footer = () => {
  return (
    <div className="w-full h-72 bg-cobalt flex flex-col justify-center px-24">
      <div className="bg-white h-1.5"></div>
      <div className="flex flex-row justify-between items-end text-white mt-8">
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

    </div>
  );
};
