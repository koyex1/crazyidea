import React from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';

function BarChartComponent({subject, title}) {
    const greenData = subject;

    const labelData = greenData.map((d, idx) => ({
        x: d.x,
        y: greenData[idx].y
    }));

    return (
        <>
            <div className="BarComponent">
                <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                    <VerticalGridLines  />
                    <HorizontalGridLines />
                    <XAxis attr="x"
                        attrAxis="y"
                        orientation="bottom"
                        position="middle"
                        title={title[0].x}
                        tickTotal={10}/>
                    <YAxis 
                    attr="y"
                    attrAxis="x"
                    orientation="left"
                    position="middle"
                    title={title[0].y} />
                    <VerticalBarSeries className="vertical-bar-series-example" data={greenData} />
                    <LabelSeries data={labelData} getLabel={d => d.x} />
                </XYPlot>
            </div>
        </>
    )
}

export default BarChartComponent
