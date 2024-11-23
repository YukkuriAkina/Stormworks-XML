const Tag = [
    {
        name: "definition",
        des: "コンポーネントを定義するタグ。",
        type: "基本",
        property: [""]

    },
    {
        name: "sfx_datas",
        des: "",
        type: "基本",
        property: []

    },
    {
        name: "sfx_data",
        des: "",
        type: "基本",
        property: []

    },
    {
        name: "sfx_layers",
        des: "",
        type: "基本",
        property: []

    },
    {
        name: "logic_nodes",
        des: "",
        type: "ロジックノード",
        property: []

    },
    {
        name: "logic_node",
        des: "",
        type: "ロジックノード",
        property: []

    },
    {
        name: "position",
        des: "",
        type: "基本",
        property: []

    },
    {
        name: "logic_nodes",
        des: "",
        type: "ロジックノード",
        property: []

    },
    {
        name: "sfx_layers",
        des: "",
        type: "基本",
        property: []

    },
    {
        name: "logic_nodes",
        des: "",
        type: "ロジックノード",
        property: []

    },
]
for (let i = 0; i < Tag.length; i++) {
    const ele = Tag[i];
    const Base = document.createElement('li')
    const Desc = document.createElement('p')
    const Type = document.createElement('p')
    const Pro = document.createElement('p')
    Type.style.borderColor = "Gray"
    Pro.style.borderColor = "skyblue"
    Base.innerText = ele.name
    Base.id = ele.name
    Desc.innerText = ele.des ? ele.des : "調査中"
    Type.innerText = ele.type
    Base.appendChild(Desc)
    Base.appendChild(Type)
    for (let index = 0; index < ele.property.length; index++) {
        const element = ele.property[index];
        const link = document.createElement('a')
        link.href = `/Property.html#${element}`
        link.style.marginRight = "1em"
        link.innerText = element
        Pro.appendChild(link)
        Base.appendChild(Pro)
    }
    document.getElementById('base').appendChild(Base)
}