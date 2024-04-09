const GoogleMap = () => {
  return (
    <div className="w-full md:w-3/4 h-[300px] sm:h-[450px]">
      <iframe
        title="google-maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255277.88558448784!2d36.720707694482996!3d-1.3462798112938135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f12096e1f870d%3A0x541f93cb531ad804!2sImara%20Daima%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1697918351014!5m2!1sen!2ske"
        width="600"
        height="450"
        className="border-0 w-full h-full"
        allowfullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
