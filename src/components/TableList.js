import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.tableBorder};
  ${(props) =>
    props.theme.media.smallDesktop(css`
      padding: 10px 0 0px;
    `)}
  ${(props) =>
    props.theme.media.smallDesktopUp(css`
      border-bottom: 0;
    `)}
`;

const RowColumn = styled.div`
  padding: 15px;
  font-size: 16px;
  line-height: 24px;
  word-break: break-word;
  ${(props) =>
    props.theme.media.smallDesktop(css`
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
    `)}
  &.cell__state {
    ${(props) =>
      props.theme.media.smallDesktopUp(css`
        width: 15%;
        border-right: 1px solid ${(props) => props.theme.colors.tableBorder};
      `)}
    ${(props) =>
      props.theme.media.smallDesktop(css`
        width: 55%;
      `)}
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
        color: ${(props) => props.theme.colors.linkDark};
      }
      &.icon--active {
        svg {
          fill: ${(props) => props.theme.colors.validGreen};
        }
        span {
          color: ${(props) => props.theme.colors.validGreenDark};
        }
      }
    }
  }
  &.cell__user {
    ${(props) =>
      props.theme.media.smallDesktopUp(css`
        width: 20%;
        border-right: 1px solid ${(props) => props.theme.colors.tableBorder};
      `)}
    ${(props) =>
      props.theme.media.smallDesktop(css`
        width: 55%;
      `)}
  }
`;

const Table = styled.div`
  clear: both;
`;

const Content = styled.div``;

const Header = styled.div``;

const Wrapper = styled.div``;

const TableList = ({ characters }) => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>
        <Table role="table"></Table>
      </Content>
    </Wrapper>
  );
};

export default TableList;
