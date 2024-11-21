import EventsComp from "../components/modules/events/EventsComp";
import DefaultLayout from "../layout/DefaultLayout";

const Events = () => {
  return (
    <DefaultLayout active={4}>
      <EventsComp />
    </DefaultLayout>
  );
};

export default Events;
