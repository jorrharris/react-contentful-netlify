import React from "react";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";
import RoomsFilter from "../components/RoomsFilter";
import RoomList from "../components/RoomList";

//Using Higher Order Components
function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

//Not using Higher Order Components
// import React from "react";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";
// import RoomsFilter from "../components/RoomsFilter";
// import RoomList from "../components/RoomList";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
