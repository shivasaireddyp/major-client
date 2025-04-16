// import { TASKS_URL } from "../../../utils/contants";
// import { apiSlice } from "../apiSlice";

// export const postApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     createTask: builder.mutation({
//       query: (data) => ({
//         const token = localStorage.getItem("userInfo")
//         return {
//           url: `${TASKS_URL}/create`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//         }
//       }),
//     }),

//     duplicateTask: builder.mutation({
//       query: (id) => ({
//         url: `${TASKS_URL}/duplicate/${id}`,
//         method: "POST",
//         body: {},
//         credentials: "include",
//       }),
//     }),

//     updateTask: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/update/${data._id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     getAllTask: builder.query({
//       query: ({ strQuery, isTrashed, search }) => ({
//         url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     getSingleTask: builder.query({
//       query: (id) => ({
//         url: `${TASKS_URL}/${id}`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     createSubTask: builder.mutation({
//       query: ({ data, id }) => ({
//         url: `${TASKS_URL}/create-subtask/${id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     postTaskActivity: builder.mutation({
//       query: ({ data, id }) => ({
//         url: `${TASKS_URL}/activity/${id}`,
//         method: "POST",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     trashTast: builder.mutation({
//       query: ({ id }) => ({
//         url: `${TASKS_URL}/${id}`,
//         method: "PUT",
//         credentials: "include",
//       }),
//     }),

//     deleteRestoreTast: builder.mutation({
//       query: ({ id, actionType }) => ({
//         url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
//         method: "DELETE",
//         credentials: "include",
//       }),
//     }),

//     getDasboardStats: builder.query({
//       query: () => ({
//         url: `${TASKS_URL}/dashboard`,
//         method: "GET",
//         credentials: "include",
//       }),
//     }),

//     changeTaskStage: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/change-stage/${data?.id}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),

//     changeSubTaskStatus: builder.mutation({
//       query: (data) => ({
//         url: `${TASKS_URL}/change-status/${data?.id}/${data?.subId}`,
//         method: "PUT",
//         body: data,
//         credentials: "include",
//       }),
//     }),
//   }),
// });

// export const {
//   usePostTaskActivityMutation,
//   useCreateTaskMutation,
//   useGetAllTaskQuery,
//   useCreateSubTaskMutation,
//   useTrashTastMutation,
//   useDeleteRestoreTastMutation,
//   useDuplicateTaskMutation,
//   useUpdateTaskMutation,
//   useGetSingleTaskQuery,
//   useGetDasboardStatsQuery,
//   useChangeTaskStageMutation,
//   useChangeSubTaskStatusMutation,
// } = postApiSlice;


import { TASKS_URL } from "../../../utils/contants";
import { apiSlice } from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("userInfo"); // Get token from localStorage
        return {
          url: `${TASKS_URL}/create`,
          method: "POST",
          body: data,
          headers: token?{
            Authorization: `Bearer ${token}` // Attach token
          }:{},
          credentials: "include",
        };
      },
    }),

    duplicateTask: builder.mutation({
      query: (id) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/duplicate/${id}`,
          method: "POST",
          body: {},
          headers:token? {
            Authorization: `Bearer ${token}`,
          }:{},
          credentials: "include",
        };
      },
    }),

    updateTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/update/${data._id}`,
          method: "PUT",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    getAllTask: builder.query({
      query: ({ strQuery, isTrashed, search }) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    getSingleTask: builder.query({
      query: (id) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    createSubTask: builder.mutation({
      query: ({ data, id }) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/create-subtask/${id}`,
          method: "PUT",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    postTaskActivity: builder.mutation({
      query: ({ data, id }) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/activity/${id}`,
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    trashTast: builder.mutation({
      query: ({ id }) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/${id}`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    deleteRestoreTast: builder.mutation({
      query: ({ id, actionType }) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/delete-restore/${id}?actionType=${actionType}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    getDasboardStats: builder.query({
      query: () => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/dashboard`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    changeTaskStage: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/change-stage/${data?.id}`,
          method: "PUT",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),

    changeSubTaskStatus: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("userInfo");
        return {
          url: `${TASKS_URL}/change-status/${data?.id}/${data?.subId}`,
          method: "PUT",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  usePostTaskActivityMutation,
  useCreateTaskMutation,
  useGetAllTaskQuery,
  useCreateSubTaskMutation,
  useTrashTastMutation,
  useDeleteRestoreTastMutation,
  useDuplicateTaskMutation,
  useUpdateTaskMutation,
  useGetSingleTaskQuery,
  useGetDasboardStatsQuery,
  useChangeTaskStageMutation,
  useChangeSubTaskStatusMutation,
} = taskApiSlice;
