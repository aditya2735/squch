"use client";
import React from 'react'
import Image from "next/image";
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

const Filter = () => {
    return (
        <div className="card-filter-short">
            <ul className="list-unstyled d-flex align-items-center m-0">
                <li>
                    <Link href="" className="toggle-filter btn">Filter
                        <Image
                            src={"/images/filter.svg"}
                            alt='filter icon'
                            height={18}
                            width={18}
                        />
                    </Link>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Price 149-300
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Price 149-300
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Price 149-300 action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Price 149-300 else
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Link href="" className="btn">
                        10 Minutes Delivery
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Filter