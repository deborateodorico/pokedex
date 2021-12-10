// import React, { useEffect, useState } from 'react';
// import Loading from './Loading';
// import Error from './Error';
// import SearchForAbilitys from './SearchForAbilitys';
// import SearchForMoves from './SearchForMoves';

// export default function MoveAndAbility({
//   abilitys,
//   onCheckboxAbilitysChange,
//   moves,
//   onCheckboxMovesChange,
// }) {
//   const [formData, setFormData] = useState({
//     ability: [],
//     search: '',
//   });

//   const [formDataMove, setFormDataMove] = useState({
//     move: [],
//     search: '',
//   });
//   const [filterRequestState, setFilterRequestState] = useState({
//     isLoading: false,
//     error: false,
//   });

//   useEffect(() => {
//     fetchApiMoves();
//     fetchApiAbilitys();
//   }, []);

//   const apiAbilityUrl = process.env.REACT_APP_ABILITY_API_ADDRESS;
//   const apiMoveUrl = process.env.REACT_APP_MOVE_API_ADDRESS;

//   const handleSearchChange = (event) => {
//     setFormData({
//       ...formData,
//       search: event.target.value,
//     });
//   };

//   const fetchApiAbilitys = async () => {
//     try {
//       setFilterRequestState({
//         ...filterRequestState,
//         isLoading: true,
//       });
//       const response = await fetch(apiAbilityUrl);
//       setFilterRequestState({
//         ...filterRequestState,
//         isLoading: false,
//       });
//       const abilityData = await response.json();
//       setFormData({
//         ...formData,
//         ability: abilityData.results,
//       });
//     } catch (error) {
//       setFilterRequestState({
//         ...filterRequestState,
//         error: true,
//         isLoading: false,
//       });
//     }
//   };

//   const fetchApiMoves = async () => {
//     try {
//       setFilterRequestState({
//         ...filterRequestState,
//         isLoading: true,
//       });
//       const response = await fetch(apiMoveUrl);
//       setFilterRequestState({
//         ...filterRequestState,
//         isLoading: false,
//       });
//       const moveData = await response.json();
//       setFormDataMove({
//         ...formDataMove,
//         move: moveData.results,
//       });
//     } catch (error) {
//       setFilterRequestState({
//         ...filterRequestState,
//         error: true,
//         isLoading: false,
//       });
//     }
//   };

//   return (
//     <div>
//       {filterRequestState.isLoading && <Loading />}
//       {filterRequestState.error && !filterRequestState.isLoading && (
//         <Error fetch={(apiAbilityUrl, apiMoveUrl)} />
//       )}
//       <SearchForAbilitys
//         selectedAbilitys={abilitys}
//         onCheckboxAbilitysChange={onCheckboxAbilitysChange}
//         abilitys={formData.ability}
//         search={formData.search}
//         onSearchValue={handleSearchChange}
//       />
//       <SearchForMoves
//         selectedMoves={moves}
//         onCheckboxMovesChange={onCheckboxMovesChange}
//         moves={formDataMove.move}
//         search={formData.search}
//         onSearchValue={handleSearchChange}
//       />
//     </div>
//   );
// }
