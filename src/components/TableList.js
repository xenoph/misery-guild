import React from "react";
import styled from "styled-components";

import { device } from "../config/sizes";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid black;
  @media ${device.smallDesktop} {
    padding: 10px 0 0px;
  }
  @media ${device.smallDesktop} {
    border-bottom: 0;
  }
`;

const RowColumn = styled.div`
  padding: 15px;
  font-size: 16px;
  line-height: 24px;
  word-break: break-word;

  @media ${device.smallDesktop} {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    padding: 0px 10px;
    display: block;
    &:before {
      margin-bottom: 3px;
      content: attr(data-title);
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      display: block;
    }
  }
  &.cell__state {
    @media ${device.smallDesktopUp} {
      width: 10%;
      border-right: 1px solid black;
    }
    @media ${device.smallDesktop} {
      width: 55%;
    }
    .icon {
      svg {
        width: 15px;
        height: 15px;
        margin-right: 7.5px;
        vertical-align: middle;
      }
      span {
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        font-size: 15px;
        color: purple;
      }
    }
  }
  &.cell__name {
    @media ${device.smallDesktopUp} {
      width: 45%;
      border-right: 1px solid black;
    }
    @media ${device.smallDesktop} {
      width: 55%;
    }
  }
  &.cell__covenant {
    @media ${device.smallDesktopUp} {
      width: 30%;
      border-right: 1px solid black;
    }
    @media ${device.smallDesktop} {
      width: 55%;
    }
  }
  &.cell__ilvl {
    @media ${device.smallDesktopUp} {
      width: 15%;
      border-right: 1px solid black;
    }
    @media ${device.smallDesktop} {
      width: 55%;
    }
  }
`;

const HeaderRowGroup = styled.div`
  font-weight: 700;
  width: 100%;
  background: cyan !important;
  @media ${device.smallDesktop} {
    display: none;
  }
`;

const CharacterRowGroup = styled.div`
  margin-bottom: 15px;
  @media ${device.smallDesktopUp} {
    background: ${(props) => props.theme.colors.tableRowOdd};
    margin-bottom: 0;
    &:nth-of-type(odd) {
      background: ${(props) => props.theme.colors.tableRowEven};
    }
  }
  @media ${device.smallDesktop} {
    &.active > div {
      border-top: 5px solid ${(props) => props.theme.colors.validGreen};
    }
    &.not-active > div {
      border-top: 5px solid ${(props) => props.theme.colors.tableBorder};
    }
  }
  &:last-of-type > div {
    border: 1px solid ${(props) => props.theme.colors.tableBorder};
  }
`;

const Table = styled.div`
  clear: both;
`;

const Content = styled.div``;

const Wrapper = styled.div``;

const TableList = ({ characters }) => {
  return (
    <Wrapper>
      <Table role="table">
        <HeaderRowGroup role="rowgroup">
          <Row role="row">
            <RowColumn
              role="columnheader"
              className="cell cell__class"
              aria-sort="none"
            >
              Class
            </RowColumn>
            <RowColumn
              role="columnheader"
              className="cell cell__name"
              aria-sort="none"
            >
              Name
            </RowColumn>
            <RowColumn
              role="columnheader"
              className="cell cell__covenant"
              aria-sort="none"
            >
              Covenant
            </RowColumn>
            <RowColumn
              role="columnheader"
              className="cell cell__ilvl"
              aria-sort="none"
            >
              iLevel
            </RowColumn>
          </Row>
        </HeaderRowGroup>
      </Table>
    </Wrapper>
  );
};

export default TableList;
