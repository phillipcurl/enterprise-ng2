import {TimeEntry} from './../../shared';

export class TimeCard {
  constructor(
    public id: number,
    public userId: number,
    public startDate: Date,
    public endDate: Date,
    public timeEntries: Array<TimeEntry>,
    public hours: number,
    public approved: boolean
  ) {}
}