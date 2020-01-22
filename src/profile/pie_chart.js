import React from 'react';
import { Platform,StyleSheet,View, Text } from 'react-native';
import { Icon } from '@ant-design/react-native';
//import PieChart from 'react-native-pie-chart';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Image, Line } from 'react-native-svg'
import { ECharts } from "react-native-echarts-wrapper";



export default class PieChartCustom extends React.Component{
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['Football','Comics','Fitness and Gym','Cooking','Renewable Energy','Others']
        },
        toolbox: {
            show : false
        },
        calculable : true,
        series : [
            {
                name:'Topics',
                type:'pie',
                radius : [30, 90],
                center : ['50%', '35%'],
                roseType : 'area',
                label: {
                    formatter: '{c}%'
                },
                labelLine: {
                    show: true,
                    length: 10
                },
                data:[
                    {value:20, name:'Football', itemStyle: {color: '#a0e13b'}},
                    {value:22, name:'Comics', itemStyle: {color: '#f2e20b'}},
                    {value:13, name:'Fitness and Gym', itemStyle: {color: '#f05924'}},
                    {value:11, name:'Cooking', itemStyle: {color: '#19b1f0'}},
                    {value:17, name:'Renewable Energy', itemStyle: {color: '#43a047'}},
                    {value:15, name:'Others', itemStyle: {color: '#ff9e05'}}
                ]
            }
        ]
    };

    render() {
        const data = [
            {
                key: 1,
                amount: 22,
                svg: { fill: '#ffff00' },
                icon: 'account-book'
            },
            {
                key: 2,
                amount: 13,
                svg: { fill: '#ff0000' },
                icon: 'alert'
            },
            {
                key: 3,
                amount: 10,
                svg: { fill: '#00a9ff' },
                icon: 'alert'
            },
            {
                key: 4,
                amount: 17,
                svg: { fill: '#049606' },
                icon: 'alert'
            },
            {
                key: 5,
                amount: 16,
                svg: { fill: '#ffb800' },
                icon: 'alert'
            },
            {
                key: 6,
                amount: 22,
                svg: { fill: '#00ff00' },
                icon: 'alert'
            }
        ];

        
        

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                        // <Line
                        //     x1={ labelCentroid[ 0 ] }
                        //     y1={ labelCentroid[ 1 ] }
                        //     x2={ pieCentroid[ 0 ] }
                        //     y2={ pieCentroid[ 1 ] }
                        //     stroke={ data.svg.fill }
                        // />
                        // <Circle
                        //     cx={ labelCentroid[ 0 ] }
                        //     cy={ labelCentroid[ 1 ] }
                        //     r={ 15 }
                        //     fill={ data.svg.fill }
                        // />
                    <G
                        key={index}
                        x={labelCentroid[ 0 ]}
                        y={labelCentroid[ 1 ]}
                    >
                        {/* <Icon.Ionicons
                            name = {'md-create'}
                            size = {25}
                            color = 'red'
                            style = {styles.createIcon}
                        /> */}
                        {/* <Circle
                            r={18}
                            fill={'white'}
                        /> */}
                        {
                            <Icon 
                                name={data.icon}
                                x={-10}
                            y={10}
                            width={20}
                            height={20}
                            preserveAspectRatio="xMidYMid slice"
                            opacity="1" />
                            /* <Image
                            x={-10}
                            y={10}
                            width={20}
                            height={20}
                            preserveAspectRatio="xMidYMid slice"
                            opacity="1"
                            href={Images.memes[ index + 1 ]}
                        /> */}

                    </G>
                )
            })
        }

        return (
            <View style={styles.pieChartContainer}>
            {/* <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart> */}
            <ECharts option={this.option} style={styles.pieChartContainer} /> 

           
            </View>
        )
        // return (
        //     <View style={styles.pieChartContainer}>
                
        //         <Icon.Ionicons
        //             name = {'md-create'}
        //             size = {25}
        //             color = 'red'
        //             style = {styles.createIcon}
        //         />
                
        //     </View>
        // );
    }
};

const styles = StyleSheet.create({
    pieChartContainer: {
        // backgroundColor: "white",
        // height: 250, 
        // width: 250,
        
        width: "100%",
        height: 270
    }
});