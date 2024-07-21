
'use client';

import { List } from "antd";
import { SpeechInterface } from "../../../../../../types/DataModelTypes/SpeechInterface";

function formatTimeFromMinutes(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
}

interface SpeechProperty {
    speech: SpeechInterface;
}

export default function Speech({ speech }: SpeechProperty) {
    return (
        <List.Item>
            <List.Item.Meta
                title={speech.topic}
                description={`Speaker: ${speech.speaker}`}
            />
            <div>
                {formatTimeFromMinutes(speech.startTime)} - {formatTimeFromMinutes(speech.endTime)}
            </div>
        </List.Item>
    );
}