

const LumaCheckoutButton = ({ eventId, className, children }) => {
  return (
    <a
      href={`https://lu.ma/event/${eventId}`}
      className={className}
      data-luma-action="checkout"
      data-luma-event-id={eventId}
    >
      {children}
    </a>
  );
};

export default LumaCheckoutButton;