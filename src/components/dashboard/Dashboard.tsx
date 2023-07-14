import { ResponsiveLine } from '@nivo/line'
import {Card} from "react-bootstrap";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/circle-packing
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCirclePacking = ({ data /* see data tab */ }) => (
    <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ scheme: 'purples' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.4
                ]
            ]
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={n=>2===n.node.depth}
        labelsSkipRadius={10}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.5
                ]
            ]
        }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[
            {
                match: {
                    depth: 1
                },
                id: 'lines'
            }
        ]}
    />
)

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        theme={{
            textColor: 'white'
        }}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        enableGridX={false}
        enableGridY={false}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Months',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'error count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

    const data2 = {
        "name": "nivo",
        "color": "hsl(234, 70%, 50%)",
        "children": [
            {
                "name": "viz",
                "color": "hsl(282, 70%, 50%)",
                "children": [
                    {
                        "name": "stack",
                        "color": "hsl(159, 70%, 50%)",
                        "children": [
                            {
                                "name": "cchart",
                                "color": "hsl(51, 70%, 50%)",
                                "loc": 170270
                            },
                            {
                                "name": "xAxis",
                                "color": "hsl(11, 70%, 50%)",
                                "loc": 122015
                            },
                            {
                                "name": "yAxis",
                                "color": "hsl(199, 70%, 50%)",
                                "loc": 169021
                            },
                            {
                                "name": "layers",
                                "color": "hsl(53, 70%, 50%)",
                                "loc": 184596
                            }
                        ]
                    },
                    {
                        "name": "ppie",
                        "color": "hsl(132, 70%, 50%)",
                        "children": [
                            {
                                "name": "chart",
                                "color": "hsl(9, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pie",
                                        "color": "hsl(183, 70%, 50%)",
                                        "children": [
                                            {
                                                "name": "outline",
                                                "color": "hsl(119, 70%, 50%)",
                                                "loc": 54067
                                            },
                                            {
                                                "name": "slices",
                                                "color": "hsl(65, 70%, 50%)",
                                                "loc": 71814
                                            },
                                            {
                                                "name": "bbox",
                                                "color": "hsl(40, 70%, 50%)",
                                                "loc": 146578
                                            }
                                        ]
                                    },
                                    {
                                        "name": "donut",
                                        "color": "hsl(272, 70%, 50%)",
                                        "loc": 77238
                                    },
                                    {
                                        "name": "gauge",
                                        "color": "hsl(221, 70%, 50%)",
                                        "loc": 36539
                                    }
                                ]
                            },
                            {
                                "name": "legends",
                                "color": "hsl(96, 70%, 50%)",
                                "loc": 26107
                            }
                        ]
                    }
                ]
            },
            {
                "name": "colors",
                "color": "hsl(177, 70%, 50%)",
                "children": [
                    {
                        "name": "rgb",
                        "color": "hsl(175, 70%, 50%)",
                        "loc": 117483
                    },
                    {
                        "name": "hsl",
                        "color": "hsl(262, 70%, 50%)",
                        "loc": 113732
                    }
                ]
            },
            {
                "name": "utils",
                "color": "hsl(139, 70%, 50%)",
                "children": [
                    {
                        "name": "randomize",
                        "color": "hsl(251, 70%, 50%)",
                        "loc": 117957
                    },
                    {
                        "name": "resetClock",
                        "color": "hsl(228, 70%, 50%)",
                        "loc": 49172
                    },
                    {
                        "name": "noop",
                        "color": "hsl(65, 70%, 50%)",
                        "loc": 13387
                    },
                    {
                        "name": "tick",
                        "color": "hsl(83, 70%, 50%)",
                        "loc": 109856
                    },
                    {
                        "name": "forceGC",
                        "color": "hsl(59, 70%, 50%)",
                        "loc": 101718
                    },
                    {
                        "name": "stackTrace",
                        "color": "hsl(218, 70%, 50%)",
                        "loc": 177921
                    },
                    {
                        "name": "dbg",
                        "color": "hsl(145, 70%, 50%)",
                        "loc": 115499
                    }
                ]
            },
            {
                "name": "generators",
                "color": "hsl(109, 70%, 50%)",
                "children": [
                    {
                        "name": "address",
                        "color": "hsl(276, 70%, 50%)",
                        "loc": 55418
                    },
                    {
                        "name": "city",
                        "color": "hsl(167, 70%, 50%)",
                        "loc": 88402
                    },
                    {
                        "name": "animal",
                        "color": "hsl(76, 70%, 50%)",
                        "loc": 36282
                    },
                    {
                        "name": "movie",
                        "color": "hsl(152, 70%, 50%)",
                        "loc": 127505
                    },
                    {
                        "name": "user",
                        "color": "hsl(131, 70%, 50%)",
                        "loc": 148452
                    }
                ]
            },
            {
                "name": "set",
                "color": "hsl(68, 70%, 50%)",
                "children": [
                    {
                        "name": "clone",
                        "color": "hsl(234, 70%, 50%)",
                        "loc": 171900
                    },
                    {
                        "name": "intersect",
                        "color": "hsl(67, 70%, 50%)",
                        "loc": 32170
                    },
                    {
                        "name": "merge",
                        "color": "hsl(258, 70%, 50%)",
                        "loc": 116036
                    },
                    {
                        "name": "reverse",
                        "color": "hsl(70, 70%, 50%)",
                        "loc": 39678
                    },
                    {
                        "name": "toArray",
                        "color": "hsl(282, 70%, 50%)",
                        "loc": 138432
                    },
                    {
                        "name": "toObject",
                        "color": "hsl(258, 70%, 50%)",
                        "loc": 30435
                    },
                    {
                        "name": "fromCSV",
                        "color": "hsl(4, 70%, 50%)",
                        "loc": 102691
                    },
                    {
                        "name": "slice",
                        "color": "hsl(72, 70%, 50%)",
                        "loc": 90020
                    },
                    {
                        "name": "append",
                        "color": "hsl(140, 70%, 50%)",
                        "loc": 43428
                    },
                    {
                        "name": "prepend",
                        "color": "hsl(74, 70%, 50%)",
                        "loc": 25140
                    },
                    {
                        "name": "shuffle",
                        "color": "hsl(183, 70%, 50%)",
                        "loc": 88618
                    },
                    {
                        "name": "pick",
                        "color": "hsl(163, 70%, 50%)",
                        "loc": 22412
                    },
                    {
                        "name": "plouc",
                        "color": "hsl(12, 70%, 50%)",
                        "loc": 157852
                    }
                ]
            },
            {
                "name": "text",
                "color": "hsl(59, 70%, 50%)",
                "children": [
                    {
                        "name": "trim",
                        "color": "hsl(14, 70%, 50%)",
                        "loc": 65781
                    },
                    {
                        "name": "slugify",
                        "color": "hsl(134, 70%, 50%)",
                        "loc": 149899
                    },
                    {
                        "name": "snakeCase",
                        "color": "hsl(141, 70%, 50%)",
                        "loc": 112823
                    },
                    {
                        "name": "camelCase",
                        "color": "hsl(249, 70%, 50%)",
                        "loc": 121400
                    },
                    {
                        "name": "repeat",
                        "color": "hsl(99, 70%, 50%)",
                        "loc": 109935
                    },
                    {
                        "name": "padLeft",
                        "color": "hsl(192, 70%, 50%)",
                        "loc": 94523
                    },
                    {
                        "name": "padRight",
                        "color": "hsl(145, 70%, 50%)",
                        "loc": 104166
                    },
                    {
                        "name": "sanitize",
                        "color": "hsl(248, 70%, 50%)",
                        "loc": 113563
                    },
                    {
                        "name": "ploucify",
                        "color": "hsl(37, 70%, 50%)",
                        "loc": 77459
                    }
                ]
            },
            {
                "name": "misc",
                "color": "hsl(256, 70%, 50%)",
                "children": [
                    {
                        "name": "greetings",
                        "color": "hsl(37, 70%, 50%)",
                        "children": [
                            {
                                "name": "hey",
                                "color": "hsl(256, 70%, 50%)",
                                "loc": 112748
                            },
                            {
                                "name": "HOWDY",
                                "color": "hsl(319, 70%, 50%)",
                                "loc": 193911
                            },
                            {
                                "name": "aloha",
                                "color": "hsl(162, 70%, 50%)",
                                "loc": 192274
                            },
                            {
                                "name": "AHOY",
                                "color": "hsl(183, 70%, 50%)",
                                "loc": 92340
                            }
                        ]
                    },
                    {
                        "name": "other",
                        "color": "hsl(273, 70%, 50%)",
                        "loc": 193820
                    },
                    {
                        "name": "path",
                        "color": "hsl(341, 70%, 50%)",
                        "children": [
                            {
                                "name": "pathA",
                                "color": "hsl(300, 70%, 50%)",
                                "loc": 53868
                            },
                            {
                                "name": "pathB",
                                "color": "hsl(118, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathB1",
                                        "color": "hsl(176, 70%, 50%)",
                                        "loc": 174927
                                    },
                                    {
                                        "name": "pathB2",
                                        "color": "hsl(18, 70%, 50%)",
                                        "loc": 149013
                                    },
                                    {
                                        "name": "pathB3",
                                        "color": "hsl(233, 70%, 50%)",
                                        "loc": 47659
                                    },
                                    {
                                        "name": "pathB4",
                                        "color": "hsl(20, 70%, 50%)",
                                        "loc": 103960
                                    }
                                ]
                            },
                            {
                                "name": "pathC",
                                "color": "hsl(225, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathC1",
                                        "color": "hsl(91, 70%, 50%)",
                                        "loc": 21447
                                    },
                                    {
                                        "name": "pathC2",
                                        "color": "hsl(139, 70%, 50%)",
                                        "loc": 69817
                                    },
                                    {
                                        "name": "pathC3",
                                        "color": "hsl(286, 70%, 50%)",
                                        "loc": 100069
                                    },
                                    {
                                        "name": "pathC4",
                                        "color": "hsl(14, 70%, 50%)",
                                        "loc": 154720
                                    },
                                    {
                                        "name": "pathC5",
                                        "color": "hsl(297, 70%, 50%)",
                                        "loc": 183433
                                    },
                                    {
                                        "name": "pathC6",
                                        "color": "hsl(220, 70%, 50%)",
                                        "loc": 172484
                                    },
                                    {
                                        "name": "pathC7",
                                        "color": "hsl(331, 70%, 50%)",
                                        "loc": 108275
                                    },
                                    {
                                        "name": "pathC8",
                                        "color": "hsl(104, 70%, 50%)",
                                        "loc": 13443
                                    },
                                    {
                                        "name": "pathC9",
                                        "color": "hsl(283, 70%, 50%)",
                                        "loc": 195154
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    const data= [
    {
        "id": "Service 1",
        "color": "hsl(161, 70%, 50%)",
        "data": [
            {
                "x": "January",
                "y": 138
            },
            {
                "x": "February",
                "y": 83
            },
            {
                "x": "March",
                "y": 139
            },
            {
                "x": "April",
                "y": 243
            },
            {
                "x": "May",
                "y": 148
            },
            {
                "x": "June",
                "y": 43
            },
            {
                "x": "July",
                "y": 219
            },
            {
                "x": "August",
                "y": 14
            },
            {
                "x": "September",
                "y": 292
            },
            {
                "x": "October",
                "y": 188
            },
            {
                "x": "November",
                "y": 290
            },
            {
                "x": "December",
                "y": 227
            }
        ]
    },
        {
            "id": "Service 2",
            "color": "hsl(201, 70%, 50%)",
            "data": [
                {
                    "x": "January",
                    "y": 189
                },
                {
                    "x": "February",
                    "y": 110
                },
                {
                    "x": "March",
                    "y": 88
                },
                {
                    "x": "April",
                    "y": 25
                },
                {
                    "x": "May",
                    "y": 102
                },
                {
                    "x": "June",
                    "y": 125
                },
                {
                    "x": "July",
                    "y": 211
                },
                {
                    "x": "August",
                    "y": 155
                },
                {
                    "x": "September",
                    "y": 57
                },
                {
                    "x": "October",
                    "y": 103
                },
                {
                    "x": "November",
                    "y": 164
                },
                {
                    "x": "December",
                    "y": 99
                }
            ]
        },
        {
            "id": "Service 3",
            "color": "hsl(223, 70%, 50%)",
            "data": [
                {
                    "x": "January",
                    "y": 22
                },
                {
                    "x": "February",
                    "y": 10
                },
                {
                    "x": "March",
                    "y": 99
                },
                {
                    "x": "April",
                    "y": 181
                },
                {
                    "x": "May",
                    "y": 145
                },
                {
                    "x": "June",
                    "y": 12
                },
                {
                    "x": "July",
                    "y": 254
                },
                {
                    "x": "August",
                    "y": 247
                },
                {
                    "x": "September",
                    "y": 277
                },
                {
                    "x": "October",
                    "y": 196
                },
                {
                    "x": "November",
                    "y": 148
                },
                {
                    "x": "December",
                    "y": 158
                }
            ]
        },
        {
            "id": "Service 4",
            "color": "hsl(203, 70%, 50%)",
            "data": [
                {
                    "x": "January",
                    "y": 206
                },
                {
                    "x": "February",
                    "y": 189
                },
                {
                    "x": "March",
                    "y": 108
                },
                {
                    "x": "April",
                    "y": 287
                },
                {
                    "x": "May",
                    "y": 66
                },
                {
                    "x": "June",
                    "y": 31
                },
                {
                    "x": "July",
                    "y": 59
                },
                {
                    "x": "August",
                    "y": 251
                },
                {
                    "x": "September",
                    "y": 140
                },
                {
                    "x": "October",
                    "y": 11
                },
                {
                    "x": "November",
                    "y": 172
                },
                {
                    "x": "December",
                    "y": 146
                }
            ]
        },
        {
            "id": "Service 5",
            "color": "hsl(195, 70%, 50%)",
            "data": [
                {
                    "x": "January",
                    "y": 98
                },
                {
                    "x": "February",
                    "y": 102
                },
                {
                    "x": "March",
                    "y": 263
                },
                {
                    "x": "April",
                    "y": 79
                },
                {
                    "x": "May",
                    "y": 135
                },
                {
                    "x": "June",
                    "y": 218
                },
                {
                    "x": "July",
                    "y": 261
                },
                {
                    "x": "August",
                    "y": 46
                },
                {
                    "x": "September",
                    "y": 298
                },
                {
                    "x": "October",
                    "y": 299
                },
                {
                    "x": "November",
                    "y": 292
                },
                {
                    "x": "December",
                    "y": 32
                }
            ]
        }
    ]

const Dashboard = () => {
    return (
        <div>
            <h5>Dashboard</h5>
            <Card style={{height: 400, width: 800, margin: '1rem'}}>
                <h5 className="card-title">Error Counts</h5>
                <MyResponsiveLine data={data} />
            </Card>
            <Card style={{height: 400, width: 400,  margin: '1rem'}}>
                <h5 className="card-title">Error Type</h5>
                <MyResponsiveCirclePacking data={data2} />
            </Card>
        </div>
    )
}

export default Dashboard;