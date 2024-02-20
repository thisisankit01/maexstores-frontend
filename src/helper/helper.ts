export const isCurrentPage = (currentPath: string, path: string) => {
	try {
		return currentPath === path
	} catch (error) {
		console.log(error)
		return false
	}
}
