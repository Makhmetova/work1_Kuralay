import { Location } from '@angular/common';
import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PureDetailFormComponent } from '@app/_components/PureDetailForm/pureDetailForm.component';
import { PureInfoBlockComponent } from '@app/_components/PureInfoBlock/pureInfoBlock.component';
import { QueryOptions } from '@app/_models';
import { FormOptions, IFormOptions } from '@app/_models/common';
import { DbQueryService, AccountService, MainService } from '@app/_services';
import { BuilderSerice } from '@app/_services/builder.service';
import { ComponentPoolService } from '@app/_services/componentPool.service';
import { take } from 'rxjs/operators';
import { InitiatorInfoComponent } from './applications/initiator-info/initiator-info.component';
import { StepInfoComponent } from './applications/step-info/step-info.component';

@Component({
  selector: 'app-hre',
  templateUrl: './hre.component.html',
  styleUrls: ['./hre.component.less'],
})
export class HreComponent implements OnInit {
  id: number;
  table_name: string;
  FormOptions: IFormOptions;
  user: Object;
  title: string;
  comps: Object;
  @ViewChild('renderArea', { read: ViewContainerRef })
  renderArea: ViewContainerRef;

  constructor(
    private BigRouter: Router,
    private router: ActivatedRoute,
    private network: DbQueryService,
    private account: AccountService,
    private main: MainService,
    private factory: BuilderSerice,
    private pool: ComponentPoolService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.user = this.account.userValue.sessioninfo;
    console.log('User', this.user);

    this.table_name = this.router.snapshot.params['code'];
    this.id = this.router.snapshot.params['id'];
    let verticalInfoBlock: boolean = true;
    let infoBlock: any;
    let useTimeline: boolean;
    let tableForOrders: string = this.table_name + '_orders';
    let tableForRequests: string = this.table_name + '_requests';
    let tableForFiles: string = this.table_name + '_files';
    let showOrders = true;
    let showFiles = true;
    let linkField = this.table_name + '_id';
    let formOptionsPromise : Promise<any>;
    if (this.table_name && this.id) {
      let entityQuery = new QueryOptions('entities');
      entityQuery.flteq = {
        code: this.table_name,
      };
      let queryOpts = new QueryOptions(this.table_name);
      queryOpts.flteq = {
        id: this.id,
      };
      let entityPromise = this.network.getQuery(entityQuery).toPromise();
      let queryPromise = this.network.getQuery(queryOpts).toPromise();
      // console.log('Ent', entityPromise);
      // console.log('Ent', queryPromise);

      Promise.all([entityPromise, queryPromise]).then((resss) => {
        let ress = resss[0];
        let queryData = resss[1];
        console.log('Ress', ress);
        console.log('QQ', queryData);
        let detail = {};
        if (queryData.items && queryData.items.length > 0) {
          this.id = this.id;
          detail = queryData.items[0];
        } else {
          this.id = 0;
          this.BigRouter.navigate([`/hre/${this.table_name}/0`]);
        }
        let timelineQueryOptions = new QueryOptions(
          'req_statuses_lookups_step'
        );
        timelineQueryOptions.flteq = {
          parent_lookup: 14,
        };
        let _comp = this.pool.componentTypeDeepSearch(this.table_name);
        console.log(_comp);
        this.FormOptions = {
          showApproveForm: true,
          showCommentsForm: true,
          showFilesForm: true,
          showHistoryForm: true,
          showInfoBlock: true,
          showOrdersForm: false,
          showTimeline: true,
          formComponent: _comp,
          mainFormOptions: {},
          formComponentParams: {
            detailId: this.id,
            user: this.user,
          },
          timelineOptions: {
            useCustomTimeline: true,
            customTimelineComponent: StepInfoComponent,
            customTimelineOptions: {
              inputParams: {
                detail: detail,
              },
            },
            defaultTimelineOptions: {
              statusesLookupQuery: timelineQueryOptions,
            },
          },
        };

        this.FormOptions.infoBlockOptions = {
          verticalInfoBlock: verticalInfoBlock,
          InfoBlockComponent: PureInfoBlockComponent,
          InfoBlockParams: {},
        };

        this.FormOptions.approveOptions = {
          showButtons: true,
          showApproveButtons: true,
          useUsersFilter: true,
          useDefaultPreSettings: false,
        };

        if (showFiles) {
          let filesQueryOptions = new QueryOptions(tableForFiles);
          filesQueryOptions.flteq = {
            [linkField]: this.id,
          };
          this.FormOptions.filesOptions = {
            multiple: true,
            tableToSave: tableForFiles,
            FilesSelectQueryOptions: filesQueryOptions,
            fieldForLink: linkField,
            saveHistory: true,
          };
        }
        if (showOrders) {
          let ordersOptions = new QueryOptions(tableForOrders);
          ordersOptions.flteq = {
            [linkField]: this.id,
          };
          let requestOptions = new QueryOptions(tableForRequests);
          requestOptions.flteq = {
            [linkField]: this.id,
          };
          this.FormOptions.ordersOptions = {
            ordersLookupOptions: `code=core_entities_flow_map_v2_main&flt$is_order$eq$=1&flt$is_actual$eq$=1&flt$entity_source_code$eq$=${this.table_name}`,
            requestLookupOptions: `code=core_entities_flow_map_v2_main&flt$is_request$eq$=1&flt$is_actual$eq$=1&flt$entity_source_code$eq$=${this.table_name}`,
            tableForRequests: tableForRequests,
            tableForOrders: tableForOrders,
            ordersOptions: ordersOptions,
            requestsOptions: requestOptions,
          };
        }


        let compRef = this.factory.MountComponent(this.renderArea,PureDetailFormComponent,{
            FormOptions : this.FormOptions,
            table_name : this.table_name,
            id : this.id,
            user : this.user,
            title : ress.items[0]['title']
        })
        compRef.instance.onClose.pipe(take(1)).subscribe(res=>{
            this.goBack(res);
        })
      });
    }
  }
  goBack(ev) {

      this.location.back();

    // let lastPage = localStorage.getItem('lastpage');
    // console.log(localStorage);

    // if (lastPage) {
    //   console.log("Last", lastPage);

    //   this.BigRouter.navigate([lastPage]);
    // } else {
    //   console.log("Else");

    //   let module = this.router.snapshot['_routerState']['url'].split('/')[1];
    //   this.BigRouter.navigate([`/${module}`]);
    // }
  }
}
