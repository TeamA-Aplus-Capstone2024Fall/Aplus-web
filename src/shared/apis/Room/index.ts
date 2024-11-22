import { QueryKey } from "@shared/queryKey";
import { RoomBody, UserBody, UserData } from "@shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostCreateRoom = () => {
  return useMutation({
    mutationFn: async (data: RoomBody) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room`,
        data,
      );

      return res.data;
    },
    mutationKey: [QueryKey.room.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePostMember = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      data,
    }: {
      roomNumber: string;
      data: UserBody;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/member`,
        data,
      );

      return res.data;
    },
    mutationKey: [QueryKey.user.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutMember = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      memberId,
      data,
    }: {
      roomNumber: string;
      memberId: string;
      data: UserBody;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/member/${memberId}`,
        data,
      );

      return res.data;
    },
    mutationKey: [QueryKey.user.put],
    onSuccess: (data) => console.log(data),
  });
};

export const useGetMember = () => {
  return useMutation({
    mutationKey: [QueryKey.user.get],
    mutationFn: async ({
      roomNumber,
      roomPassword,
    }: {
      roomNumber: string;
      roomPassword: string;
    }) => {
      const res = await axios.post<UserData[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/join`,
        { roomPassword: roomPassword },
      );

      return res;
    },
    onSuccess: (data) => console.log(data),
  });
};

export const useGetRoomId = () => {
  return useMutation({
    mutationKey: [QueryKey.room.roomId],
    mutationFn: async (roomName: string) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/roomId`,
        { roomName: roomName },
      );

      return res.data;
    },
    onSuccess: (data) => console.log(data),
  });
};
