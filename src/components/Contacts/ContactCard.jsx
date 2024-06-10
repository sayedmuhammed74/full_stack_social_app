// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const ContactCard = () => {
  return (
    <div className="flex justify-between items-center px-3 py-2">
      <div className="flex items-center gap-2">
        <img
          src="./imgs/man.jpg"
          className="rounded-md"
          alt=""
          width={30}
          height={30}
        />
        <span className="text-sm text-slate-800">Ahmed Mohamed</span>
      </div>
      <FontAwesomeIcon icon={faEllipsis} className="cursor-pointer" />
    </div>
  );
};

export default ContactCard;