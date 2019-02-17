const dialogStack = []

const _onOpenDialog = dlg => {
	dialogStack.push(dlg)
}

const _onCloseDialog = id => {
	const idx = dialogStack.findIndex(e => {
		return e.id === id
	})
	if (idx != -1) {
		dialogStack.splice(idx, 1)
	}
}

const closeLastDialog = () => {
	const dlg = dialogStack.pop()
	dlg.close()
}

const routerBeforeEach = (to, from, next) => {
	if (dialogStack.length > 0) {
		closeLastDialog()
		next(false)
	} else {
		next()
	}
}

export default {
	_onOpenDialog,
	_onCloseDialog,
	routerBeforeEach
}
