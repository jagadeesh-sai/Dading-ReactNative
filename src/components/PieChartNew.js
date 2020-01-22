import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'


class PieChartNew extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 40,
                svg: { fill: '#ffff00' },
            },
            {
                key: 2,
                amount: 40,
                svg: { fill: '#ff0000' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#00a9ff' }
            },
            {
                key: 4,
                amount: 45,
                svg: { fill: '#049606' }
            },
            {
                key: 5,
                amount: 45,
                svg: { fill: '#ffb800' }
            },
            {
                key: 6,
                amount: 45,
                svg: { fill: '#00ff00' }
            }
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
           
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}

export default PieChartNew

// import React from 'react'
// import { PieChart } from 'react-native-svg-charts'
// import { Circle, G, Image } from 'react-native-svg'
// import Images from '../../../assets/images'

// class PieChartNew extends React.PureComponent {

//     render() {

//         const data = [
//             {
//                 key: 1,
//                 amount: 50,
//                 svg: { fill: '#600080' },
//             },
//             {
//                 key: 2,
//                 amount: 50,
//                 svg: { fill: '#9900cc' }
//             },
//             {
//                 key: 3,
//                 amount: 40,
//                 svg: { fill: '#c61aff' }
//             },
//             {
//                 key: 4,
//                 amount: 95,
//                 svg: { fill: '#d966ff' }
//             },
//             {
//                 key: 5,
//                 amount: 35,
//                 svg: { fill: '#ecb3ff' }
//             }
//         ]

//         const Labels = ({ slices, height, width }) => {
//             return slices.map((slice, index) => {
//                 const { labelCentroid, pieCentroid, data } = slice;
//                 return (
//                     <G
//                         key={index}
//                         x={labelCentroid[ 0 ]}
//                         y={labelCentroid[ 1 ]}
//                     >
//                         <Circle
//                             r={18}
//                             fill={'white'}
//                         />
//                         <Image
//                             x={-10}
//                             y={10}
//                             width={20}
//                             height={20}
//                             preserveAspectRatio="xMidYMid slice"
//                             opacity="1"
//                             href={Images.memes[ index + 1 ]}
//                         />
//                     </G>
//                 )
//             })
//         }

//         return (
//             <PieChart
//                 style={{ height: 200 }}
//                 valueAccessor={({ item }) => item.amount}
//                 data={data}
//                 spacing={0}
//                 outerRadius={'95%'}
//             >
//                 <Labels/>
//             </PieChart>
//         )
//     }

// }

// export default PieChartNew