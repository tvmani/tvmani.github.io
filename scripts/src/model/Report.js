export default class  Report {
  constructor(name) {
    this.name = name;
    this.dates = []
  }

  set date(date, object) {
    this.dates[date] = object
  }

  

}
