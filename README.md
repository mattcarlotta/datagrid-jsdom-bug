### DataGrid JSDOM Bug

When rendering DataGrid columns within a jsdom environment only the first three columns are rendered.

To reproduce:

- Clone repo: `git clone git@github.com:mattcarlotta/datagrid-jsdom-bug.git`

- Install deps: `yarn`

- Run test suites: `yarn test` and view log output -- only the `__check__`, `_id` and `seasonId` columns are rendered:

<details>
<summary>Click to expand jsdom output</summary>

```
<GridCell value={false} field="__check__" width={48} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue={false} align="center" cssClass="MuiDataGrid-cellCheckbox MuiDataGrid-cellWithRenderer" rowIndex={1} cellMode="view" colIndex={0} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell MuiDataGrid-cellCheckbox MuiDataGrid-cellWithRenderer MuiDataGrid-cellCenter" role="cell" data-value={false} data-field="__check__" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={0} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    <GridCellCheckboxRenderer element={{...}} id="607f8d3b14aaba53ca79061e" field="__check__" row={{...}} value={false} getValue={[Function: getValue]} colDef={{...}} cellMode="view" rowIndex={1} colIndex={0} api={{...}} formattedValue={false} isEditable={[undefined]}>
      <WithStyles(ForwardRef(Checkbox)) tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput" color="primary" inputProps={{...}}>
        <ForwardRef(Checkbox) classes={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput" color="primary" inputProps={{...}}>
          <WithStyles(ForwardRef(SwitchBase)) type="checkbox" classes={{...}} color="primary" inputProps={{...}} icon={{...}} checkedIcon={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput">
            <ForwardRef(SwitchBase) classes={{...}} type="checkbox" color="primary" inputProps={{...}} icon={{...}} checkedIcon={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput">
              <WithStyles(ForwardRef(IconButton)) component="span" className="PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput" disabled={[undefined]} tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]} color="primary">
                <ForwardRef(IconButton) classes={{...}} component="span" className="PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput" disabled={[undefined]} tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]} color="primary">
                  <WithStyles(ForwardRef(ButtonBase)) className="MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" centerRipple={true} focusRipple={true} disabled={false} component="span" tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]}>
                    <ForwardRef(ButtonBase) classes={{...}} className="MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" centerRipple={true} focusRipple={true} disabled={false} component="span" tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]}>
                      <span className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" onBlur={[Function (anonymous)]} onClick={[undefined]} onFocus={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onKeyUp={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onMouseUp={[Function (anonymous)]} onDragLeave={[Function (anonymous)]} onTouchEnd={[Function (anonymous)]} onTouchMove={[Function (anonymous)]} onTouchStart={[Function (anonymous)]} tabIndex={{...}} role={[undefined]} aria-disabled={false}>
                        <span className="MuiIconButton-label">
                          <input autoFocus={[undefined]} checked={false} defaultChecked={[undefined]} className="PrivateSwitchBase-input-8" disabled={[undefined]} id={[undefined]} name={[undefined]} onChange={[Function: handleInputChange]} readOnly={[undefined]} required={[undefined]} tabIndex={-1} type="checkbox" value={[undefined]} data-indeterminate={false} aria-label="Select Row checkbox" />
                          <ForwardRef(CheckBoxOutlineBlankIcon) fontSize={[undefined]}>
                            <WithStyles(ForwardRef(SvgIcon)) fontSize={[undefined]}>
                              <ForwardRef(SvgIcon) classes={{...}} fontSize={[undefined]}>
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color={[undefined]} aria-hidden={true} role={[undefined]}>
                                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                                </svg>
                              </ForwardRef(SvgIcon)>
                            </WithStyles(ForwardRef(SvgIcon))>
                          </ForwardRef(CheckBoxOutlineBlankIcon)>
                        </span>
                        <WithStyles(memo) center={true}>
                          <ForwardRef(TouchRipple) classes={{...}} center={true}>
                            <span className="MuiTouchRipple-root">
                              <TransitionGroup component={{...}} exit={true} childFactory={[Function: childFactory]} />
                            </span>
                          </ForwardRef(TouchRipple)>
                        </WithStyles(memo)>
                      </span>
                    </ForwardRef(ButtonBase)>
                  </WithStyles(ForwardRef(ButtonBase))>
                </ForwardRef(IconButton)>
              </WithStyles(ForwardRef(IconButton))>
            </ForwardRef(SwitchBase)>
          </WithStyles(ForwardRef(SwitchBase))>
        </ForwardRef(Checkbox)>
      </WithStyles(ForwardRef(Checkbox))>
    </GridCellCheckboxRenderer>
  </div>
</GridCell>

<GridCell value="607f8d3b14aaba53ca79061e" field="_id" width={100} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue="607f8d3b14aaba53ca79061e" align="left" cssClass="" rowIndex={1} cellMode="view" colIndex={1} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell MuiDataGrid-cellLeft" role="cell" data-value="607f8d3b14aaba53ca79061e" data-field="_id" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={1} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    607f8d3b14aaba53ca79061e
  </div>
</GridCell>

<GridCell value="20212022" field="seasonId" width={110} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue="20212022" align="left" cssClass="" rowIndex={1} cellMode="view" colIndex={2} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell MuiDataGrid-cellLeft" role="cell" data-value="20212022" data-field="seasonId" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={2} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    20212022
  </div>
</GridCell>
```

</details>

- Run test coverage: `yarn test:cov` and view the output (`coverage/lcov-report/index.html`) -- notice how coverage of `components/Layout/ViewEvents/Columns` is at 16.67%

- Change the order of the columns by moving the [eventDate column](src/components/Layout/ViewEvents/Columns/index.tsx#L37-L48) to the second index within the columns array.

- Rerun test suites: `yarn test` and view log output -- only the `__check__`, `_id` and `eventDate` columns are rendered:

<details>
<summary>Click to expand jsdom output</summary>

```
<GridCell value={false} field="__check__" width={48} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue={false} align="center" cssClass="MuiDataGrid-cellCheckbox MuiDataGrid-cellWithRenderer" rowIndex={1} cellMode="view" colIndex={0} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell MuiDataGrid-cellCheckbox MuiDataGrid-cellWithRenderer MuiDataGrid-cellCenter" role="cell" data-value={false} data-field="__check__" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={0} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    <GridCellCheckboxRenderer element={{...}} id="607f8d3b14aaba53ca79061e" field="__check__" row={{...}} value={false} getValue={[Function: getValue]} colDef={{...}} cellMode="view" rowIndex={1} colIndex={0} api={{...}} formattedValue={false} isEditable={[undefined]}>
      <WithStyles(ForwardRef(Checkbox)) tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput" color="primary" inputProps={{...}}>
        <ForwardRef(Checkbox) classes={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput" color="primary" inputProps={{...}}>
          <WithStyles(ForwardRef(SwitchBase)) type="checkbox" classes={{...}} color="primary" inputProps={{...}} icon={{...}} checkedIcon={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput">
            <ForwardRef(SwitchBase) classes={{...}} type="checkbox" color="primary" inputProps={{...}} icon={{...}} checkedIcon={{...}} tabIndex={-1} checked={false} onChange={[Function: onChange]} className="MuiDataGrid-checkboxInput">
              <WithStyles(ForwardRef(IconButton)) component="span" className="PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput" disabled={[undefined]} tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]} color="primary">
                <ForwardRef(IconButton) classes={{...}} component="span" className="PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput" disabled={[undefined]} tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]} color="primary">
                  <WithStyles(ForwardRef(ButtonBase)) className="MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" centerRipple={true} focusRipple={true} disabled={false} component="span" tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]}>
                    <ForwardRef(ButtonBase) classes={{...}} className="MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" centerRipple={true} focusRipple={true} disabled={false} component="span" tabIndex={{...}} role={[undefined]} onFocus={[Function: handleFocus]} onBlur={[Function: handleBlur]}>
                      <span className="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-5 MuiCheckbox-root MuiCheckbox-colorPrimary MuiDataGrid-checkboxInput MuiIconButton-colorPrimary" onBlur={[Function (anonymous)]} onClick={[undefined]} onFocus={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onKeyUp={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onMouseUp={[Function (anonymous)]} onDragLeave={[Function (anonymous)]} onTouchEnd={[Function (anonymous)]} onTouchMove={[Function (anonymous)]} onTouchStart={[Function (anonymous)]} tabIndex={{...}} role={[undefined]} aria-disabled={false}>
                        <span className="MuiIconButton-label">
                          <input autoFocus={[undefined]} checked={false} defaultChecked={[undefined]} className="PrivateSwitchBase-input-8" disabled={[undefined]} id={[undefined]} name={[undefined]} onChange={[Function: handleInputChange]} readOnly={[undefined]} required={[undefined]} tabIndex={-1} type="checkbox" value={[undefined]} data-indeterminate={false} aria-label="Select Row checkbox" />
                          <ForwardRef(CheckBoxOutlineBlankIcon) fontSize={[undefined]}>
                            <WithStyles(ForwardRef(SvgIcon)) fontSize={[undefined]}>
                              <ForwardRef(SvgIcon) classes={{...}} fontSize={[undefined]}>
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" color={[undefined]} aria-hidden={true} role={[undefined]}>
                                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                                </svg>
                              </ForwardRef(SvgIcon)>
                            </WithStyles(ForwardRef(SvgIcon))>
                          </ForwardRef(CheckBoxOutlineBlankIcon)>
                        </span>
                        <WithStyles(memo) center={true}>
                          <ForwardRef(TouchRipple) classes={{...}} center={true}>
                            <span className="MuiTouchRipple-root">
                              <TransitionGroup component={{...}} exit={true} childFactory={[Function: childFactory]} />
                            </span>
                          </ForwardRef(TouchRipple)>
                        </WithStyles(memo)>
                      </span>
                    </ForwardRef(ButtonBase)>
                  </WithStyles(ForwardRef(ButtonBase))>
                </ForwardRef(IconButton)>
              </WithStyles(ForwardRef(IconButton))>
            </ForwardRef(SwitchBase)>
          </WithStyles(ForwardRef(SwitchBase))>
        </ForwardRef(Checkbox)>
      </WithStyles(ForwardRef(Checkbox))>
    </GridCellCheckboxRenderer>
  </div>
</GridCell>


<GridCell value="607f8d3b14aaba53ca79061e" field="_id" width={100} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue="607f8d3b14aaba53ca79061e" align="left" cssClass="" rowIndex={1} cellMode="view" colIndex={1} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell MuiDataGrid-cellLeft" role="cell" data-value="607f8d3b14aaba53ca79061e" data-field="_id" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={1} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    607f8d3b14aaba53ca79061e
  </div>
</GridCell>


<GridCell value="2021-07-01T02:30:00.000Z" field="eventDate" width={100} rowId="607f8d3b14aaba53ca79061e" height={52} showRightBorder={false} formattedValue="2021-07-01T02:30:00.000Z" align="left" cssClass=" MuiDataGrid-cellWithRenderer" rowIndex={1} cellMode="view" colIndex={2} isEditable={[undefined]} hasFocus={false}>
  <div className="MuiDataGrid-cell  MuiDataGrid-cellWithRenderer MuiDataGrid-cellLeft" role="cell" data-value="2021-07-01T02:30:00.000Z" data-field="eventDate" data-rowindex={1} data-editable={[undefined]} data-mode="view" aria-colindex={2} style={{...}} tabIndex={-1} onClick={[Function (anonymous)]} onDoubleClick={[Function (anonymous)]} onMouseDown={[Function (anonymous)]} onMouseOver={[Function (anonymous)]} onMouseOut={[Function (anonymous)]} onMouseEnter={[Function (anonymous)]} onMouseLeave={[Function (anonymous)]} onKeyDown={[Function (anonymous)]} onBlur={[Function (anonymous)]} onFocus={[Function (anonymous)]} onDragStart={[Function (anonymous)]} onDragEnter={[Function (anonymous)]} onDragOver={[Function (anonymous)]}>
    <Memo(FormatDate) format="MMM Do @ hh:mm a" date="2021-07-01T02:30:00.000Z" style={{...}}>
      <div data-testid="formatted-date" style={{...}}>
        Jun 30th @ 07:30 pm
      </div>
    </Memo(FormatDate)>
  </div>
</GridCell>
```

</details>

- Re-run test coverage: `yarn test:cov` and view the output (`coverage/lcov-report/index.html`) -- coverage of `components/Layout/ViewEvents/Columns` changes from 16.67% to 33.33%
