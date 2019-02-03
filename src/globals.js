const dialogStack = []

const _onOpenDialog = dlg => {
	dialogStack.push(dlg)
	console.log('_onOpenDialog', dialogStack)
}

const _onCloseDialog = id => {
	const idx = dialogStack.findIndex(e => {
		return e.id === id
	})
	if (idx != -1) {
		dialogStack.splice(idx, 1)
	}
	console.log('_onCloseDialog', dialogStack)
}

const closeLastDialog = () => {
	const dlg = dialogStack.pop()
	dlg.close()
}

const routerBeforeEach = (to, from, next) => {
	console.log('routerBeforeEach', dialogStack)
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
