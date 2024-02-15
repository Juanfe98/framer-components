import RefreshIcon from "../../assets/RefreshIcon.svg";
import Tooltip from "../tooltip";

interface HeaderProps {
  title: string;
  handleRefresh: () => void;
}

const Header = ({ title, handleRefresh }: HeaderProps) => {
  return (
    <div className="bg-gray-20 p-4 flex justify-between rounded-t-lg">
      <h2 className="text-xl text-white ">{title}</h2>
      <Tooltip text="Refresh" variant="naked">
        <button onClick={handleRefresh}>
          <img src={RefreshIcon} alt="Refresh" className="w-6 h-6" />
        </button>
      </Tooltip>
    </div>
  );
};

export default Header;
