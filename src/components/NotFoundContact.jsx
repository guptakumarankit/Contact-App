import { MdContactMail } from "react-icons/md";

const NotFoundContact = () => {
    return (
      <div className="flex h-[80vh] items-center justify-center gap-4">
        <div>
          <MdContactMail className="text-4xl text-orange"/>
        </div>
        <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
      </div>
    );
  };
  
  export default NotFoundContact;