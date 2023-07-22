import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import ListContext from "../Context/ListContext";

function Piechart(props) {

    const [data, setData] = useState([
        { name: "Food", value: 70 },
        { name: "Travel", value: 20 },
        { name: "Shopping", value: 0 },
        { name: "Other", value: 10 },
    ]);

    const cxt = useContext(ListContext)

    useEffect(() => {
        console.log(cxt.user1List, cxt.user2List)
        let total = 0
        let amt = {
            Food:0,
            Travel:0,
            Shopping:0,
            Other:0,
        }
        cxt.user1List.map(item => {
            amt = {
                ...amt,
                [item.category]: amt[item.category] + Number(item.amount)
            }
        })

        cxt.user2List.map(item => {
            amt = {
                ...amt,
                [item.category]: amt[item.category] + Number(item.amount)
            }
            total += amt[item.category]
        })
        total = amt.Food + amt.Shopping + amt.Travel + amt.Other;
        console.log(total)

        setData([
            { name: "Food", value: amt.Food / total * 100 },
            { name: "Travel", value: amt.Travel / total * 100 },
            { name: "Shopping", value: amt.Shopping / total * 100 },
            { name: "Other", value: amt.Other / total * 100 },
        ])

    }, [cxt.user1List, cxt.user2List])
    

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;

    // console.log(data)

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {percent > 0 ? `${(percent * 100).toFixed(0)}% ${["😋", "😎", "😍", "🤔"][index]}` : null}
            </text>


        );
    };

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    colorProfile={["blue", "yellow", "green", "red"]}
                    dataKey="value"
                    outerRadius={200}
                    fill="pink"
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {data.map((entry, index) => {
                        return <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    })}
                </Pie>
            </PieChart>

        </div>
    );
}

export default Piechart;
