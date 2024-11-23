const tei = "を定義するプロパティ。"
const nul = "調査中"
const Prop = [
    {
        name: "name",
        des: "コンポーネントの名前" + tei,
        type: "基本",
        tag: ["definition"],
        list: [""]
    },
    {
        name: "category",
        des: "コンポーネントのカテゴリ" + tei,
        type: "基本",
        tag: ["definition"],
        list: ["0 = Blocks",
            "1 = Vehicle Control",
            "2 = MECHANICS",
            "3 = PROPULSION",
            "4 = SPECIALIST EQ(ry",
            "5 = LOGIC",
            "6 = DISPLAYS",
            "7 = SENSORS",
            "8 = DECORATIVE",
            "9 = FLUID",
            "10 = ELECTRIC",
            "11 = JETENGINES",
            "12 = WEAPONs",
            "13 = モジュールエンジン",
            "14 = INDUSTRY",
            "15 = WINDOWS",
            "16 = マイコン(対応してるかは不明)"]
    },
    {
        name: "type",
        des: `作るコンポーネントのベース(継承するベース)のID${tei} このIDは恐らく公式側が既に用意している物からの選択となる。最大値は調査中`,
        type: "基本",
        tag: ["definition"],
        list: [`0:${nul}`, `5:${nul}`, `27:Mag AllまたはConnector?`, `31:Motor`, `43:モニター`]
    },
    {
        name: "value",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "Mass",
        des: `コンポーネントの重さ${tei} Number`,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "flags",
        des: `コンポーネントのVoxelに関する事${tei} 詳しくは公式Wikiを参照。Number`,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "tags",
        des: `コンポーネントのタグ${tei}`,
        type: "基本",
        ex: "test,test2,test3",
        tag: ["definition"],
        list: []
    },
    {
        name: "audio_filename_start",
        des: `コンポーネントの使用開始時に使用する音${tei} ベースとするコンポーネントによって動作が異なる。`,
        type: "音",
        tag: ["definition"],
        list: []
    },
    {
        name: "audio_filename_loop",
        des: `コンポーネントの使用中に使用する音${tei} ベースとするコンポーネントによって動作が異なる。`,
        type: "音",
        tag: ["definition"],
        list: []
    },
    {
        name: "audio_filename_end",
        des: `コンポーネントの使用終了時に使用する音${tei} ベースとするコンポーネントによって動作が異なる。`,
        type: "音",
        tag: ["definition"],
        list: []
    },
    {
        name: "audio_gain",
        des: ``,
        type: "音",
        tag: ["definition"],
        list: []
    },
    {
        name: "mesh_data_name",
        des: `コンポーネントのメッシュ${tei}`,
        type: "メッシュ",
        tag: ["definition"],
        list: []
    },
    {
        name: "mesh_0_name",
        des: ``,
        type: "メッシュ",
        tag: ["definition"],
        list: []
    },
    {
        name: "mesh_1_name",
        des: ``,
        type: "メッシュ",
        tag: ["definition"],
        list: []
    },
    {
        name: "mesh_editor_only_name",
        des: `ワークベンチ内で選択した時のメッシュ${tei} ファイルパスで指定する。例はモニターのやじるし`,
        type: "メッシュ",
        tag: ["definition"],
        list: []
    },
    {
        name: "block_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "child_name",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "extender_name",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "constraint_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "constraint_axis",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "constraint_range_of_motion",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "max_motor_force",
        des: `モーターの力の最大値${tei}と思われる。最大値${nul}`,
        type: "モーター",
        tag: ["definition"],
        list: []
    },
    {
        name: "seat_type",
        des: `シートのタイプ${tei}と思われる。Number ${nul}`,
        type: "シート",
        tag: ["definition"],
        list: []
    },
    {
        name: "buoy_radius",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "buoy_factor",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "buoy_force",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "force_emitter_max_force",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "force_emitter_max_vector",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },
    {
        name: "engine_max_force",
        des: ``,
        type: "エンジン",
        tag: ["definition"],
        list: []
    }, {
        name: "trans_conn_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "trans_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "wheel_radius",
        des: `ホイールの判定範囲${tei}?`,
        type: "ホイール",
        tag: ["definition"],
        list: []
    }, {
        name: "button_type",
        des: `ボタンのタイプ${tei}と思われる。Number`,
        type: "基本",
        tag: ["definition"],
        list: ["0:?", "1:?"]
    }, {
        name: "light_intensity",
        des: `光の強度${tei} Number`,
        type: "ライト",
        tag: ["definition"],
        list: []
    }, {
        name: "light_range",
        des: `光の範囲${tei} Number`,
        type: "ライト",
        tag: ["definition"],
        list: []
    }, {
        name: "light_ies_map",
        des: `map. ${nul}`,
        type: "ライト",
        tag: ["definition"],
        list: []
    }, {
        name: "light_fov",
        des: ``,
        type: "ライト",
        tag: ["definition"],
        list: []
    }, {
        name: "light_type",
        des: `ライトのタイプを指定するものと思われる`,
        type: "ライト",
        tag: ["definition"],
        list: []
    }, {
        name: "door_lower_limit",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "door_upper_limit",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "dynamic_min_rotation",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "dynamic_max_rotation",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "logic_gate_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "indicator_type",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "connector_type",
        des: `コネクタのタイプ？調査中`,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "magnet_force",
        des: `マグネットの強度？調査中s`,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "gyro_type",
        des: `ジャイロのタイプ？${nul}`,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "rudder_surface_area",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "phys_collision_dampen",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    }, {
        name: "",
        des: ``,
        type: "基本",
        tag: ["definition"],
        list: []
    },

]
for (let i = 0; i < Prop.length; i++) {
    const ele = Prop[i];
    const Base = document.createElement('li')
    const Desc = document.createElement('p')
    const Ex = document.createElement('p')
    const Type = document.createElement('p')
    const Pro = document.createElement('p')
    const List = document.createElement('div')
    Type.style.borderColor = "Gray"
    Ex.style.borderColor = "red"
    Pro.style.borderColor = "skyblue"
    List.classList.add("background")
    Base.innerText = ele.name
    Base.id = ele.name
    Desc.innerText = ele.des ? ele.des : "調査中"
    Type.innerText = ele.type
    Ex.innerText = `例: ${ele.ex}`
    Base.appendChild(Desc)
    Base.appendChild(Type)
    ele.ex ? Base.appendChild(Ex) : ""
    for (let index = 0; index < ele.tag.length; index++) {
        const element = ele.tag[index];
        const link = document.createElement('a')
        link.href = `/Tag.html#${element}`
        link.style.marginRight = "1em"
        link.innerText = element
        Pro.appendChild(link)

    }
    Base.appendChild(Pro)
    for (let index = 0; index < ele.list.length; index++) {
        const element = ele.list[index];
        const ListText = document.createElement("p")
        ListText.style.border = "none"
        ListText.style.fontSize = "1em"
        ListText.style.margin = "0"
        ListText.style.fontWeight = "bolder"
        ListText.style.color = "white"
        ListText.innerText = element
        List.appendChild(ListText)
        element.length > 0 ? Base.appendChild(List) : ""
    }

    document.getElementById('base').appendChild(Base)
}