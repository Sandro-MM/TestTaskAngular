import {Component, OnInit} from '@angular/core';
import {DatePipe, NgClass, SlicePipe} from '@angular/common';
import {format, isValid, parse} from 'date-fns';


@Component({
  selector: 'app-root',
  imports: [NgClass, SlicePipe, DatePipe],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'untitled1';


  data = [
    {
      "no_event": "10017071",
      "no_team_sort": "0",
      "event_name": "NORTHERN IRELAND PREMIERSHIP",
      "no_match": "10097367",
      "match_date": "202502202300",
      "club_home": "Cliftonville",
      "club_away": "Carrick Rangers",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "1|",
      "odds_home": "0.8700|1.8200",
      "odds_away": "0.8900|1.8400",
      "price_alert_flag_home": "0",
      "price_alert_flag_away": "1"
    },
    {
      "no_event": "",
      "no_team_sort": "1",
      "event_name": "",
      "no_match": "10097368",
      "match_date": "202502212300",
      "club_home": "Dungannon Swifts",
      "club_away": "Linfield FC",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "|1",
      "odds_home": "0.8400|1.7900",
      "odds_away": "0.9200|1.8700",
      "price_alert_flag_home": "-1",
      "price_alert_flag_away": "1"
    },
    {
      "no_event": "",
      "no_team_sort": "2",
      "event_name": "",
      "no_match": "10097369",
      "match_date": "202502212300",
      "club_home": "Glenavon FC",
      "club_away": "Crusaders FC",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "|0-0.5",
      "odds_home": "0.9000|1.8500",
      "odds_away": "0.8600|1.8100",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    },
    {
      "no_event": "",
      "no_team_sort": "3",
      "event_name": "",
      "no_match": "10097370",
      "match_date": "202502212300",
      "club_home": "Glentoran FC",
      "club_away": "Ballymena United",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "1|",
      "odds_home": "0.9800|1.9300",
      "odds_away": "0.7800|1.7300",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    },
    {
      "no_event": "",
      "no_team_sort": "4",
      "event_name": "",
      "no_match": "10097371",
      "match_date": "202502212300",
      "club_home": "Loughgall",
      "club_away": "Larne",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "|1",
      "odds_home": "0.9800|1.9300",
      "odds_away": "0.7800|1.7300",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    },
    {
      "no_event": "",
      "no_team_sort": "5",
      "event_name": "",
      "no_match": "10097372",
      "match_date": "202502210100",
      "club_home": "Coleraine",
      "club_away": "Portadown FC",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "0.5-1|",
      "odds_home": "0.9500|1.9000",
      "odds_away": "0.8100|1.7600",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    },
    {
      "no_event": "10016888",
      "no_team_sort": "6",
      "event_name": "CHILE PRIMERA DIVISION",
      "no_match": "6441767",
      "match_date": "202503160000",
      "club_home": "Curico Unido",
      "club_away": "Palestino",
      "home_score": "0_0",
      "away_score": "0",
      "ev_round": "0",
      "handicap_display": "0|",
      "odds_home": "0.7500|1.5500",
      "odds_away": "1.1700|1.9500",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    },
    {
      "no_event": "",
      "no_team_sort": "7",
      "event_name": "",
      "no_match": "",
      "match_date": "",
      "club_home": "",
      "club_away": "",
      "home_score": "",
      "away_score": "",
      "ev_round": "",
      "handicap_display": "0-0.5|",
      "odds_home": "1.0900|1.8900",
      "odds_away": "0.8100|1.6100",
      "price_alert_flag_home": "",
      "price_alert_flag_away": ""
    }
  ]

  filteredItems :dataInterface [] = []





  ngOnInit(): void {

    this.filteredItems
  }
}






interface dataInterface    {
  "no_event": string,
  "no_team_sort": string,
  "event_name": string,
  "no_match": string,
  "match_date": string,
  "club_home": string,
  "club_away": string,
  "home_score": string,
  "away_score": string,
  "ev_round": string,
  "handicap_display": string,
  "odds_home": string,
  "odds_away": string,
  "price_alert_flag_home": string,
  "price_alert_flag_away": string
}
