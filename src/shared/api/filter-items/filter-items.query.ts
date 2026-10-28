import { useCallback } from 'react'

import {
	type UseQueryResult,
	queryOptions,
	useQuery,
	useQueryClient
} from '@tanstack/react-query'

import { fetchFilterItems } from '@api/filter-items/filter-items.service'
import type { FilterItem } from '@api/types/Filter'

const FILTER_ITEMS_QUERY_KEY = ['filter', 'items'] as const

const filterItemsQueryOptions = () => {
	return queryOptions({
		queryKey: FILTER_ITEMS_QUERY_KEY,
		queryFn: fetchFilterItems,
		staleTime: Infinity
	})
}

export const useFilterItemsQuery = (): UseQueryResult<FilterItem[]> => {
	return useQuery(filterItemsQueryOptions())
}

export const usePrefetchFilterItems = (): (() => void) => {
	const queryClient = useQueryClient()

	return useCallback((): void => {
		void queryClient.prefetchQuery(filterItemsQueryOptions())
	}, [queryClient])
}
