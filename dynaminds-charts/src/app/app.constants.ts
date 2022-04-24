import { Config, GraphTypes } from './app.model';

export const appLabels = {
    JANUARY: 'January',
    FEBUARY: 'Febuary',
    MARCH: 'March',
    RED: 'Red',
    PURPLE: 'Purple',
    BLUE: 'Blue',
    ORANGE: 'Orange',
    GREEN: 'Green',
    YELLOW: 'Yellow',
    GRAY: 'Grey'
}

export const colorLabels = {
    RED: 'red',
    PURPLE: 'purple',
    BLUE: 'blue',
    ORANGE: 'orange',
    GREEN: 'green',
    YELLOW: 'yellow',
    GRAY: 'grey'
}

export const enum controlNames {
    JANUARY_DATA = 'januarayData',
    FEBUARY_DATA = 'febuaryData',
    MARCH_DATA = 'marchData',
    JANUARY_COLOR = 'januarayColor',
    FEBUARY_COLOR = 'febuaryColor',
    MARCH_COLOR = 'marchColor',
    GRAPH_TYPE = 'graphType',
    MONTHS_DATA = 'monthsData',
    MONTHS_COLOR = 'monthsColor'
};

export const chartTypes = {
    PIE: 'pie',
    BAR: 'bar',
    LINE: 'line'
};

export const chartsConfigurations: Record<number, Config> = {
    1: {
        label: appLabels.JANUARY,
        dataControl: controlNames.JANUARY_DATA,
        colorControl: controlNames.JANUARY_COLOR,
        dataGroupName: controlNames.MONTHS_DATA,
        colorGroupName: controlNames.MONTHS_COLOR
    },
    2: {
        label: appLabels.FEBUARY,
        dataControl: controlNames.FEBUARY_DATA,
        colorControl: controlNames.FEBUARY_COLOR,
        dataGroupName: controlNames.MONTHS_DATA,
        colorGroupName: controlNames.MONTHS_COLOR
    },
    3: {
        label: appLabels.MARCH,
        dataControl: controlNames.MARCH_DATA,
        colorControl: controlNames.MARCH_COLOR,
        dataGroupName: controlNames.MONTHS_DATA,
        colorGroupName: controlNames.MONTHS_COLOR
    },
}

export const colorsList: string[] = [
    colorLabels.RED,
    colorLabels.PURPLE,
    colorLabels.BLUE,
    colorLabels.ORANGE,
    colorLabels.GREEN,
    colorLabels.YELLOW,
    colorLabels.GRAY,
];

export const graphTypes: string[] = [ chartTypes.PIE, chartTypes.BAR, chartTypes.LINE ];