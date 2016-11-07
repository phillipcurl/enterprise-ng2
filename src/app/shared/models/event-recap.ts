// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:   PC
// @Last modified time: 2016-05-13T21:26:21-04:00

export class EventRecap {
  constructor(
    public id: number,
    public eventId: number,
    public employeeName: string,
    public recapDate: string,
    public employeeHours: number,
    public storeNum: number,
    public storeName: string,
    public storeAddress: string,
    public storeContact: string,
    public demoLocation: string,
    public demoCompany: string,
    public distributor: string,
    public storeTraffic: string,
    public products: [{
      name: string,
      samplesPoured: number,
      bottlesSold: number,
      regularPrice: number,
      demoPrice: number
    }]
  ) {}
}