/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import HostelCard from './Card';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'b',
                x: 3,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'c',
                x: 6,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'e',
                x: 0,
                y: 1,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'f',
                x: 3,
                y: 1,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'g',
                x: 6,
                y: 1,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'h',
                x: 9,
                y: 1,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'i',
                x: 9,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'j',
                x: 0,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'k',
                x: 3,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'l',
                x: 6,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
            {
                i: 'm',
                x: 0,
                y: 3,
                w: 3,
                h: 2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
            },
        ];
        const layouts = { lg: layoutLg };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 9, sm: 6, xs: 3, xxs: 3 }}
                horizontalCompact
                autoSize
            >
                <div
                    key="a"
                    className="hostelGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <HostelCard />
                </div>
                <div key="b" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="c" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div
                    key="d"
                    className="hostelGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <HostelCard />
                </div>
                <div key="e" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="f" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="g" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="h" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="i" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div
                    key="j"
                    className="hostelGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <HostelCard />
                </div>
                <div key="k" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div key="l" className="hostelGrid" autoSize="true">
                    <HostelCard />
                </div>
                <div
                    key="m"
                    className="hostelGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <HostelCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default MyFirstGrid;
