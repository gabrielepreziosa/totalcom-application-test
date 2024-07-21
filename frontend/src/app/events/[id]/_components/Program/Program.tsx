
'use client';

import { List } from "antd";
import { SpeechInterface } from "../../../../../types/DataModelTypes/SpeechInterface";
import Speech from "./Speech/Speech";

interface ProgramProperty {
    program: SpeechInterface[];
}

export default function Program({ program }: ProgramProperty) {
    return (
        <List
            dataSource={program}
            renderItem={speech => (
                <Speech speech={speech} />
            )}
        />
    );
}