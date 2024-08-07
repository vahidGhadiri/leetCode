interface Node {
    parentId: string,
    name: string,
    id: string,
    children?: Node[]
}

const generateComments = (data: Node[]) => {
    const idToNodeMap = new Map<string, Node>()
    const rootNodes: Node[] = []

    data.forEach((item) => {
        idToNodeMap.set(item.id, { ...item, children: [] })
    })

    data.forEach((item) => {
        const currentNode = idToNodeMap.get(item.id)!
        const parent = idToNodeMap.get(item.parentId)

        if (!currentNode) return
        if (item.parentId === null) {
            rootNodes.push(currentNode)
        } else {
            parent?.children?.push(currentNode)
        }
    })
}
