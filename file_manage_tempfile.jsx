        <article className={Class.main}>
           <nav>
             <div className={Class.eachCol}>
               <label id={Class.opt_staff_lable} htmlFor={Class.opt_staff}>广告类型</label>
               <Select id={Class.opt_select} defaultValue='上屏' style={{ width: `10%` }} onChange={self.selectSearch}>
                 <Option value='all'>上屏</Option>
                 <Option value='effective'>查询广告</Option>
                 <Option value='invalid'>办理广告</Option>
               </Select>
               <label className={Class.opt_select_lable} htmlFor={Class.opt_select}>状态</label>
               <Select id={Class.opt_select} defaultValue='全部' style={{ width: `10%` }} onChange={self.selectSearch}>
                 <Option value='all'>全部</Option>
                 <Option value='effective'>正常</Option>
                 <Option value='invalid'>过期</Option>
               </Select>
               <Button icon='search' className={Class.search_btn} type="Default" loading={this.state.searchLoading} onClick={this.search}>查询</Button>
             </div>
             <div className={`${Class.eachCol} ${Class.marginT1}`}>
             <label className={Class.opt_select_lable} htmlFor="">终端地区</label>
             <Select id={Class.opt_select} className={Class.area} mode='multiple' style={{ width: `10%` }} onChange={self.selectSearch}>
               {this.createAreaList(this.state.areaList)}
             </Select>
             <label className={Class.opt_select_lable} htmlFor="">截止时间</label>
              <RangePicker onChange={self.onChange} />
             </div>
             <div className={`${Class.eachCol} ${Class.marginT2}`}>
               <Button icon='plus' className={Class.add_btn} type="primary" loading={this.state.addLoading} onClick={this.add}>新增</Button>
             </div>
           </nav>
           <div className={Class.table_main}>
              <Table columns={this.tableColumns}
                     rowKey='terminal_no'
                     dataSource={dataSource}
                     pagination={{
                     total: count,
                     pageSize: pageSize,
                     defaultPageSize:pageSize,
                     showSizeChanger: true,
                     onShowSizeChange(current, pageSize) {
                       self.toSelectchange(current, pageSize);
                     },
                     onChange(current) {
                       self.gotoThispage(current, self.state.queryInfo.pageSize);
                     },                                         
                     showTotal: function () {
                       return '共 ' + count + ' 条数据'; 
                     },
                     }}
                     scroll={{x:``,y:`85%`}}
              />
           </div>
        </article>


        <span className={Class.opt_span}>
             {this.renderButton(record)}
           </span>