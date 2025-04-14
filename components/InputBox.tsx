export default function InputBox() {
    return(
        <input
          className="text-black 
          text-center 
          text-lg
          rounded-md 
          border-round
          border-groove 
          border-3
          bg-white 
          w-75 
          h-10"
          placeholder="Enter your URL here"
          required
        />
    );
}