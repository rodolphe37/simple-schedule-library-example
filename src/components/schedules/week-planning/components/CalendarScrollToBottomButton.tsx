import DoubleChevronIcon from "../../../../ui/icons/doubleChevronIcon";

const CalendarScrollToBottomButton = ({
  scrollToBottom,
  isInDarkMode,
}: {
  scrollToBottom: () => void;
  isInDarkMode?: () => boolean;
}) => {
  return (
    <div
      onClick={() => scrollToBottom()}
      className={` ${
        isInDarkMode && isInDarkMode() ? "bg-gray-800" : "bg-white"
      } cursor-pointer`}
      id="bottomChevron"
      style={{
        width: "12.1%",
        height: "6%",
        position: "absolute",
        zIndex: 5,
        bottom: "2.6%",
      }}
    >
      <DoubleChevronIcon
        style={{ marginBottom: "6%" }}
        className="-bottom-0 left-[44%] absolute rotate-180"
      />
    </div>
  );
};

export default CalendarScrollToBottomButton;
