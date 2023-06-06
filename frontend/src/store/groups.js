import { csrfFetch } from "./csrf";
const See_ALL_GROUPS = "groups/SeeAllGroups";
const CREATE_GROUP = "groups/createGroup";

//const ADD_GROUP_IMAGE = "groups/addGroupImage";

const GetAllGroups = (groups) => ({
  type: See_ALL_GROUPS,
  payload: groups,
});

const createGroup = (group) => ({
  type: CREATE_GROUP,
  payload: group,
});

// const addGroupImage = (image) => ({
//   type: ADD_GROUP_IMAGE,
//   payload: image,
// });

export const SeeAllGroupsThunk = () => async (dispatch) => {
  const res = await csrfFetch("/api/groups");
  const data = await res.json();

  dispatch(GetAllGroups(data.Groups));
  return data.Groups;
};

// export const addImageToGroupThunk = (image, groupId) => async (dispatch) => {
//   const imgRes = await csrfFetch(`/api/groups/${groupId}/images`, {
//     method: "POST",
//     body: JSON.stringify(image),
//   });

// if (imgRes.ok) {
//   const img = await imgRes.json();
//   dispatch(addGroupImage(img));
//   return img;
//}
//};

export const createGroupThunk = (group, image) => async (dispatch) => {
  const res = await csrfFetch("/api/groups", {
    method: "POST",
    body: JSON.stringify(group),
  });

  if (res.ok) {
    const newGroup = await res.json();
    dispatch(createGroup(newGroup));
    // dispatch(addImageToGroupThunk(image, newGroup.id));

    return newGroup;
  }
};
const initialState = { allGroups: [], singleGroup: {} };

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case See_ALL_GROUPS: {
      const newState = { ...state };
      newState.allGroups = action.payload;
      return newState;
    }
    case CREATE_GROUP: {
    }
    default:
      return state;
  }
};
export default groupsReducer;
