import { QueryKey } from "@shared/queryKey";
import {
  ExpenseGet,
  FinanceInfoBody,
  FinancePredictedExpenses,
  FinancePredictedIncomes,
  FinanceSavingGoals,
  GetFinanceHistory,
  IncomeGet,
  IncomeOrExpense,
  PostFinanceAccount,
  Transaction,
} from "@shared/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFinanceInfo = (
  roomNumber: string,
  year: string,
  month: string,
) => {
  return useQuery({
    queryKey: [QueryKey.finance.info],
    queryFn: async () => {
      const res = await axios.get<FinanceInfoBody>(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance?year=${year}&month=${month}`,
      );

      return res.data;
    },
    enabled: roomNumber !== "undefined",
  });
};

export const usePostFinanceAccount = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      data,
    }: {
      roomNumber: string;
      data: PostFinanceAccount;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/account`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.account.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutFinanceAccount = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: PostFinanceAccount;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/${accountId}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.account.put],
    onSuccess: (data) => console.log(data),
  });
};

export const useGetFinanceHistory = (
  roomNumber: string,
  accountId: string,
  year: string,
  month: string,
) => {
  return useQuery({
    queryKey: [QueryKey.finance.history, accountId],
    queryFn: async () => {
      const res = await axios.get<GetFinanceHistory>(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/${accountId}?year=${year}&month=${month}`,
      );

      return res.data;
    },
    enabled: roomNumber !== "undefined",
  });
};

export const usePostIncomeExpense = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: IncomeOrExpense;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/${accountId}/accountTxn`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.ie.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutIncomeExpense = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: IncomeOrExpense;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/accountTxn/${accountId}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.ie.put],
    onSuccess: (data) => console.log(data),
  });
};

export const usePostTransfer = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      from,
      to,
      data,
    }: {
      roomNumber: string;
      from: string;
      to: string;
      data: Transaction;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/accountTransferTxn?fromAccountId=${from}&toAccountId=${to}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.transfer.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutTransfer = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      transactionId,
      from,
      to,
      data,
    }: {
      roomNumber: string;
      transactionId: string;
      from: string;
      to: string;
      data: Transaction;
    }) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/accountTransferTxn/${transactionId}?fromAccountId=${from}&toAccountId=${to}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.transfer.put],
    onSuccess: (data) => console.log(data),
  });
};

export const useGetIncome = ({
  roomNumber,
  year,
  month,
}: {
  roomNumber: string;
  year: string;
  month: string;
}) => {
  return useQuery({
    queryKey: [QueryKey.finance.ig],
    queryFn: async () => {
      const res = await axios.get<IncomeGet>(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/income?year=${year}&month=${month}`,
      );

      return res.data;
    },
    enabled: roomNumber !== "undefined",
  });
};

export const useGetExpense = ({
  roomNumber,
  year,
  month,
}: {
  roomNumber: string;
  year: string;
  month: string;
}) => {
  return useQuery({
    queryKey: [QueryKey.finance.eg],
    queryFn: async () => {
      const res = await axios.get<ExpenseGet>(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/expense?year=${year}&month=${month}`,
      );

      return res.data;
    },
    enabled: roomNumber !== "undefined",
  });
};

export const usePostSavingGoal = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      data,
    }: {
      roomNumber: string;
      data: Omit<FinanceSavingGoals, "savingGoalId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/savingGoal`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.savingGoal.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutSavingGoal = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: Omit<FinanceSavingGoals, "savingGoalId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/savingGoal/${accountId}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.savingGoal.put],
    onSuccess: (data) => console.log(data),
  });
};

export const usePostPredictedExpense = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      data,
    }: {
      roomNumber: string;
      data: Omit<FinancePredictedExpenses, "expenseId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/predictedExpense`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.expectedExpense.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutPredictedExpense = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: Omit<FinancePredictedExpenses, "expenseId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/predictedExpense/${accountId}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.expectedExpense.put],
    onSuccess: (data) => console.log(data),
  });
};

export const usePostPredictedIncome = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      data,
    }: {
      roomNumber: string;
      data: Omit<FinancePredictedIncomes, "incomeId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/predictedIncome`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.expectedIncome.post],
    onSuccess: (data) => console.log(data),
  });
};

export const usePutPredictedIncome = () => {
  return useMutation({
    mutationFn: async ({
      roomNumber,
      accountId,
      data,
    }: {
      roomNumber: string;
      accountId: string;
      data: Omit<FinancePredictedIncomes, "incomeId">;
    }) => {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/room/${roomNumber}/finance/predictedIncome/${accountId}`,
        { ...data },
      );

      return res.data;
    },
    mutationKey: [QueryKey.finance.expectedIncome.put],
    onSuccess: (data) => console.log(data),
  });
};
