function Button({ link, text }) {
  return (
    <a
      type="button"
      className="font-firacode outline outline-teal-500 text-teal-500 hover:text-white rounded-xl px-4 py-2 hover:bg-teal-500 transition duration-200 lg:text-lg font-medium"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;
